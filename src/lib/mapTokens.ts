import { Accessor, createEffect, createRoot, mapArray, onCleanup } from "solid-js";
import createRootlessEffect from "./createRootlessEffect";

export default <T>(tokens: Accessor<T[]>, callback: (token: T) => any) => {
  /*  const map = mapArray(tokens, callback);
  createEffect(map); */

  const cache = new Map<T, any>();

  createEffect(() => {
    const current = new Set();
    tokens().forEach((token) => {
      if (!cache.has(token)) {
        createRoot((dispose) => {
          callback(token);
          cache.set(token, dispose);
        });
      }
      current.add(token);
    });

    cache.forEach((dispose, token) => {
      if (!current.has(token)) {
        cache.delete(token);
        dispose();
      }
    });
  });
};
