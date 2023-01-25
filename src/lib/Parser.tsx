import { Accessor, createMemo, createRoot, JSX, JSXElement } from "solid-js";
import { createPropsEffect } from "src/Effects";

export function createJSXParser<TTokens extends {}>(id: string = "solid-parser") {
  const $TOKEN = Symbol(id);

  function createToken<TProps extends { [key: string]: any }, TToken extends TTokens>(
    tokenCallback: (props: TProps) => TToken,
    component?: (props: TProps) => JSXElement,
  ): (props: TProps) => JSX.Element {
    return (props: TProps) => {
      const tokenProperties = Object.fromEntries(
        Object.entries(tokenCallback(props)).map(([key, value]) => {
          return [key, value];
        }),
      );

      return Object.assign(
        component
          ? () => component(props)
          : () => {
              // process.env.DEV &&
              console.info(`tokens can only be rendered inside a Parser with id '${id}'`);
              return "";
            },
        {
          [$TOKEN]: true,
          ...tokenProperties,
        },
      );
    };
  }

  function childrenTokens(fn: Accessor<JSXElement | JSXElement[]>): Accessor<TTokens[]> {
    const children = createMemo(fn);
    const resolveChild = (child: any): any => {
      while (true) {
        if (Array.isArray(child)) return child.map(resolveChild).flat();
        if (typeof child !== "function") return child;
        if ($TOKEN in child) return child;
        child = child();
      }
    };
    return createMemo(() =>
      ([] as any[])
        .concat(children())
        .map(resolveChild)
        .flat()
        .filter((child) => child && $TOKEN in child),
    );
  }

  function isToken(element: any) {
    return typeof element === "function" && $TOKEN in element && (element as TTokens);
  }

  function getToken(element: any) {
    return (
      (typeof element === "function" && $TOKEN in element && (element as TTokens)) || undefined
    );
  }

  return { createToken, childrenTokens, $TOKEN, isToken, getToken };
}
