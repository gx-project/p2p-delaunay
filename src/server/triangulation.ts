//@ts-ignore
import Delaunator from "delaunator/delaunator";
import { Coord } from "../common/types";
import { reversePositionsKeyValue } from "../common/utils.js";
import { TriangulationMapped, TTriangulationResponseItem } from "./types";

export function nextHalfedge(e: number) {
  return e % 3 === 2 ? e - 2 : e + 1;
}

export function positionsLinear(positions: Map<string, Coord>): number[] {
  const result: number[] = [];

  for(const [,coord] of positions) {
    result.push(...coord);
  }

  return result;
}

export function forEachTriangleEdge(
  points: Coord[],
  delaunay: Delaunator<unknown>
): Set<TTriangulationResponseItem> {
  const response = new Set<TTriangulationResponseItem>();
  for (let e = 0; e < delaunay.triangles.length; e++) {
    if (e > delaunay.halfedges[e]) {
      const left = points[delaunay.triangles[e]];
      const right = points[delaunay.triangles[nextHalfedge(e)]];
      response.add({
        left,
        right,
      });
    }
  }

  return response;
}

export function mapTriangulationToIds(
  map: Map<string, Coord>,
  input: Set<TTriangulationResponseItem>
): TriangulationMapped {
  const result: TriangulationMapped = new Map();
  const mapCoordToId = reversePositionsKeyValue(map);

  for (const coord of input) {
    const leftID = mapCoordToId.get(coord.left) as string;
    const rightID = mapCoordToId.get(coord.right) as string;

    if (result.has(leftID)) {
      result.get(leftID)?.push(rightID);
    } else {
      result.set(leftID, [rightID]);
    }
  }

  return result;
}
