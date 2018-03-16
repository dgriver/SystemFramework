/*创建XMLHttpRequest对象, 各浏览器创建方式不统一*/
function createXMLHttpRequest() {
	var xmlHttp = null;
	if (window.ActiveXObject) { // IE浏览器创建方式
		xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
	} else if (window.XMLHttpRequest) { // 非IE浏览器创建方式
		xmlHttp = new XMLHttpRequest();
	}
	if (!(xmlHttp)) { // 异常，创建对象失败
		window.alert("创建XMLHttpRequest异常!");
	}
	return xmlHttp;
}