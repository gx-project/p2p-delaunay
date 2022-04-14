import { Coord } from "../common/types";

export type TTriangulationResponseItem = { left: Coord, right: Coord };
export type TriangulationMapped = Map<string, string[]>;