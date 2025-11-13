import React, { createContext } from "react";
import type { ThemeTypes } from "../types/theme";

export const CreatedContextWithDefaultValue = createContext<
  undefined | ThemeTypes
>(undefined);
