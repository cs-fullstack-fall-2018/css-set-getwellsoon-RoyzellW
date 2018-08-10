// function main() {
//
// var scrolly = 0;
// var distance = 40;
// var speed = 24;
// function autoscrollto (el) {
//     var currentY = window.pageYOffset;
//     var targetY = document.getElementById (el).offsetTop;
//     var bodyheight = document.body.offsetHeight;
//     var yPos = currentY + window.innerHeight;
//     var animator = setTimeout ('autoscrollto(\''+el+'\')',speed);
//     if (yPos > bodyHeight) {
//         clearTimeout(animator);
//     }
//
//     else {
//         if(currentY < targetY-distance) {
//             scrolly = currentY+distance;
//             window.scroll(0, scrolly);
//         }
//
//         else {
//             clearTimeout(animator);
//         }
//     }
//
//     function resetScroller (el) {
//         var currentY = window.pageYOffset;
//         var target = document.getElementById(el).offsetTop;
//         var animator = setTimeout ('resetScroller(\''+el+'\')',speed);
//         if (currentY > targetY)(
//             scrollY = currentY-distance;
//         window.scroll(0, scrollY);
//     }
//
//     else {
//         clearTimeout(animator);
//     }
// }
// }