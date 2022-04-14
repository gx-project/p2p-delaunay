import { reversePositionsKeyValue } from "../common/utils.js";
export function nextHalfedge(e) {
    return e % 3 === 2 ? e - 2 : e + 1;
}
export function positionsLinear(positions) {
    const result = [];
    for (const [, coord] of positions) {
        result.push(...coord);
    }
    return result;
}
export function forEachTriangleEdge(points, delaunay) {
    const response = new Set();
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
export function mapTriangulationToIds(map, input) {
    var _a;
    const result = new Map();
    const mapCoordToId = reversePositionsKeyValue(map);
    for (const coord of input) {
        const leftID = mapCoordToId.get(coord.left);
        const rightID = mapCoordToId.get(coord.right);
        if (result.has(leftID)) {
            (_a = result.get(leftID)) === null || _a === void 0 ? void 0 : _a.push(rightID);
        }
        else {
            result.set(leftID, [rightID]);
        }
    }
    return result;
}
//# sourceMappingURL=triangulation.js.map