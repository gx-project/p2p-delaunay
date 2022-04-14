import Delaunator from "delaunator";
import { forEachTriangleEdge, mapTriangulationToIds, positionsLinear, } from "./server/triangulation.js";
const positionsState = new Map();
positionsState.set("d1", [-9.572610976729036, -35.77662466244116]);
positionsState.set("d2", [-9.573287212855298, -35.7767745784353]);
positionsState.set("d3", [-9.572513472804443, -35.77712544565565]);
positionsState.set("d4", [-9.571771183945048, -35.77678095783931]);
positionsState.set("d5", [-9.571683912507808, -35.77729598612758]);
const linearPoints = positionsLinear(positionsState);
const delaunator = new Delaunator(linearPoints);
const links = forEachTriangleEdge([...positionsState.values()], delaunator);
const map = mapTriangulationToIds(positionsState, links);
console.log({ positionsState, linearPoints, delaunator, map });
//# sourceMappingURL=index.js.map