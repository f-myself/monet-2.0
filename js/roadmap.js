const roadmapTooltip = document.querySelectorAll('.roadmap__point');
const iconCloseTooltip = document.querySelectorAll('.tooltip__icon');

if (roadmapTooltip) {
    roadmapTooltip.forEach(function(item) {
        item.addEventListener('click', showRoadmapTooltip, !1)
    })
    iconCloseTooltip.forEach(function(item) {
        item.addEventListener('click', closeTooltip, !1)
    })
}

function closeTooltip(e) {
    e.stopPropagation();
    e.target.parentElement.style.display = 'none';
    if (e.target.parentElement.parentElement.classList.contains('roadmap__point--open')) {
        e.target.parentElement.parentElement.classList.remove('roadmap__point--open')
    }
}

function showRoadmapTooltip(e) {
    e.target.classList.toggle('roadmap__point--open');
    if (e.target.firstElementChild.style.display === 'block') {
        e.target.firstElementChild.style.display = 'none'
    } else {
        e.target.firstElementChild.style.display = 'block'
    }
}

function connectPointsModule(points) {
    var drawLine = function(x1, y1, x2, y2, lineElem) {
        var distanse = Math.sqrt(((x1 - x2) * (x1 - x2)) + ((y1 - y2) * (y1 - y2)));
        var xMid = (x1 + x2) / 2;
        var yMid = (y1 + y2) / 2;
        var angleInRad = Math.atan2(y1 - y2, x1 - x2);
        var angleInDegrees = (angleInRad * 180) / Math.PI;
        var line = lineElem;
        line.style.width = distanse - 20 + 'px';
        line.style.top = yMid + 'px';
        line.style.left = xMid - (distanse / 2) + 'px';
        line.style.transform = "rotate(" + angleInDegrees + "deg)"
    }
    var getOffsetRect = function(elem) {
        var box = elem.getBoundingClientRect();
        var body = document.body;
        var docElem = document.documentElement;
        var scrollTop = window.pageYOffset || docElem.scrollTop || body.scrollTop;
        var scrollLeft = window.pageXOffset || docElem.scrollLeft || body.scrollLeft;
        var clientTop = docElem.clientTop || body.clientTop || 0;
        var clientLeft = docElem.clientLeft || body.clientLeft || 0;
        var top = box.top + scrollTop - clientTop;
        var left = box.left + scrollLeft - clientLeft;
        return {
            top: Math.round(top),
            left: Math.round(left)
        }
    }
    var init = function() {
        points.forEach(function(item, index) {
            var firstPointCoordinates = getOffsetRect(item[0]);
            var secondPointCoordinates = getOffsetRect(item[1]);
            var line = document.getElementById('line' + index);
            if (!line) {
                line = document.createElement('div');
                line.classList.add('compound');
                line.id = 'line' + index
            }
            drawLine(firstPointCoordinates.left + Math.round(item[0].offsetWidth), firstPointCoordinates.top + Math.round(item[0].offsetHeight / 2), secondPointCoordinates.left + Math.round(item[1].offsetWidth / 2), secondPointCoordinates.top + Math.round(item[1].offsetHeight / 2), line);
            var parentElement = document.body;
            parentElement.appendChild(line)
        })
    }
    return {
        init: init
    }
}
var points = [
    [document.getElementById('v021'), document.getElementById('chatterboxv1')],
    [document.getElementById('fastSync'), document.getElementById('chatterboxv2')],
    [document.getElementById('fastSync'), document.getElementById('testnet1')],
    [document.getElementById('v010'), document.getElementById('testnet1')],
    [document.getElementById('dynamic-membership'), document.getElementById('chatterboxv3')],
    [document.getElementById('dynamic-membership'), document.getElementById('testnet2')],
    [document.getElementById('poa'), document.getElementById('testnet2')],
    [document.getElementById('IBC'), document.getElementById('first-IBC')],
    [document.getElementById('light-client'), document.getElementById('first-IBC')]
];
if (document.getElementById('roadmap')) {
    console.log('GOT IT!')
    var setLines = new connectPointsModule(points);
    setLines.init();
    window.onresize = function(event) {
        setLines.init()
    }
}