function rectInRect(ax1, ax2, ay1, ay2, bx1, bx2, by1, by2) {
    return (ax1 < bx2 && ax2 > bx1 && ay1 < by2 && ay2 > by1)
        || (ax1 > bx2 && ax2 < bx1 && ay1 > by2 && ay2 < by1);
}
function get_centered_pos(object, coords) {
    return {
        "x": coords.x - (object.width / 2),
        "y": coords.y - (object.height / 2)
    };
}
function is_on_stage(stage, object) {
    return (object.x + object.width) > (stage.pivot.x - stage.x) &&
        (object.x) < (stage.pivot.x + stage.x);
}