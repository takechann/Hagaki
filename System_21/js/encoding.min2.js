                var tableToCSV = {
                  export: function(elm /*, delimiter */) {
                    var table = elm;
                    var rows  = this.getRows(table);
                    var lines = [];
                    var delimiter = delimiter || ',';

                    for (var i = 0, numOfRows = rows.length; i < numOfRows; i++) {
                      var cols    = this.getCols(rows[i]);
                      var line = [];

                      for (var j = 0, numOfCols = cols.length; j < numOfCols; j++) {
                          var text = cols[j].textContent || cols[j].innerText;
                          text = '"'+text.replace(/"/g, '""')+'"';

                          line.push(text);
                      }
                      lines.push(line.join(delimiter));
                    }
                    return lines.join("\r\n");
                  },

                  getRows: function(elm){
                    return Util.getNodesByName(elm, 'tr');
                  },

                  getCols: function(elm){
                    return Util.getNodesByName(elm, ['td', 'th']);
                  }
                }

                var Util = {
                  getNodesByName: function(elm /*, string or array*/) {
                    var children  = elm.childNodes;
                    var nodeNames = ('string' === typeof arguments[1]) ? [arguments[1]] : arguments[1] ;
                    nodeNames = nodeNames.map(function(str){ return str.toLowerCase() });

                    var results  = [];

                    for (var i = 0, max = children.length; i < max; i++ ) {
                      if (nodeNames.indexOf(children[i].nodeName.toLowerCase()) !== -1)
                      {
                         results.push(children[i]);
                      }
                      else
                      {
                         results = results.concat(this.getNodesByName(children[i], nodeNames));
                      }
                    }
                    return results;
                  }
                }

                window.onload = function(){
                  document.getElementById('download').addEventListener('click', function (e){
                    var csv   = tableToCSV.export(document.getElementById('tbl0'));
                    var sjisArray = Encoding.convert(Encoding.stringToCode(csv), {to: 'SJIS'});
                    var blob  = new Blob([new Uint8Array(sjisArray)], {type: 'text/csv'});

                    if (window.navigator.msSaveBlob) {
                      e.preventDefault();
                      window.navigator.msSaveBlob(blob, this.getAttribute('download'));
                    }
                    else {
                      this.href = URL.createObjectURL(blob);
                    }
                  });
                 }
function movRow(oj){
    if(swt(oj)=='tbl0')
      var targetId = 'tbl1'
    else
      var targetId = 'tbl0'

    //クローン行作成
    var coj = oj.parentNode.parentNode.cloneNode(true)

    //ターゲットテーブルへクローン追加
    var targetTable = document.getElementById(targetId)
    targetTable.firstChild.insertBefore( coj , null )

    //カレント行削除
    oj.parentNode.parentNode.parentNode.removeChild(oj.parentNode.parentNode)
}
function movRowRight(oj)
{
      var targetId = 'tbl1'

    //クローン行作成
    var coj = oj.parentNode.parentNode.cloneNode(true)

    //ターゲットテーブルへクローン追加
    var targetTable = document.getElementById(targetId)
    targetTable.firstChild.insertBefore( coj , null)

    //カレント行削除
    oj.parentNode.parentNode.parentNode.removeChild(oj.parentNode.parentNode)
}

function movRowLeft(oj)
{
      var targetId = 'tbl0'

    //クローン行作成
    var coj = oj.parentNode.parentNode.cloneNode(true)

    //ターゲットテーブルへクローン追加
    var targetTable = document.getElementById(targetId)
    targetTable.firstChild.insertBefore( coj , null )

    //カレント行削除
    oj.parentNode.parentNode.parentNode.removeChild(oj.parentNode.parentNode)
}
function AllNotSend() {
　　　var table = document.getElementById('tbl0');
      var collection = table.rows;
	  
for(var i=1; i<table.rows.length;){
      var tr = collection.item(1);
	  var td = tr.cells.item(1);
      
	  movRowRight(td.firstChild);
}
}

function AllSend() {
　　　var table = document.getElementById('tbl1');
      var collection = table.rows;
	  
for(var i=1; i<table.rows.length;){
      var tr = collection.item(1);
	  var td = tr.cells.item(1);
      
	  movRowLeft(td.firstChild);
}
}
function hakodate(){

	var table = document.getElementById('tbl1')
	var collection = table.rows
	

for(var i=0; i<table.rows.length;){
	var tr = collection.item(i)
	var td = tr.cells.item(3)
	if(td.firstChild.nodeValue.indexOf('函館市') != -1){
		movRowLeft(td.firstChild)
	}else if(td.firstChild.nodeValue.indexOf('七飯町') != -1){
		movRowLeft(td.firstChild)
	}else if(td.firstChild.nodeValue.indexOf('北斗市') != -1){
		movRowLeft(td.firstChild)
	}else if(td.firstChild.nodeValue.indexOf('森町') != -1){
		movRowLeft(td.firstChild)
	}else{
		i++;
	}
}
}

function first(){
	var table = document.getElementById('tbl1')
	var collection = table.rows

for(var i=0; i<table.rows.length;){
	var tr = collection.item(i)
	var td = tr.cells.item(6)
		if(td.firstChild.nodeValue.indexOf('小1') != -1){
			movRowLeft(td.firstChild)
		}else{
			i++;
		}
	}
}

function second(){
	var table = document.getElementById('tbl1')
	var collection = table.rows

for(var i=0; i<table.rows.length;){
	var tr = collection.item(i)
	var td = tr.cells.item(6)
		if(td.firstChild.nodeValue.indexOf('小2') != -1){
			movRowLeft(td.firstChild)
		}else{
			i++;
		}
	}
}

function third(){
	var table = document.getElementById('tbl1')
	var collection = table.rows

for(var i=0; i<table.rows.length;){
	var tr = collection.item(i)
	var td = tr.cells.item(6)
		if(td.firstChild.nodeValue.indexOf('小3') != -1){
			movRowLeft(td.firstChild)
		}else{
			i++;
		}
	}
}

function fourth(){
	var table = document.getElementById('tbl1')
	var collection = table.rows

for(var i=0; i<table.rows.length;){
	var tr = collection.item(i)
	var td = tr.cells.item(6)
		if(td.firstChild.nodeValue.indexOf('小4') != -1){
			movRowLeft(td.firstChild)
		}else{
			i++;
		}
	}
}

function fifth(){
	var table = document.getElementById('tbl1')
	var collection = table.rows

for(var i=0; i<table.rows.length;){
	var tr = collection.item(i)
	var td = tr.cells.item(6)
		if(td.firstChild.nodeValue.indexOf('小5') != -1){
			movRowLeft(td.firstChild)
		}else{
			i++;
		}
	}
}

function sixth(){
	var table = document.getElementById('tbl1')
	var collection = table.rows

for(var i=0; i<table.rows.length;){
	var tr = collection.item(i)
	var td = tr.cells.item(6)
		if(td.firstChild.nodeValue.indexOf('小6') != -1){
			movRowLeft(td.firstChild)
		}else{
			i++;
		}
	}
}

function seventh(){
	var table = document.getElementById('tbl1')
	var collection = table.rows

for(var i=0; i<table.rows.length;){
	var tr = collection.item(i)
	var td = tr.cells.item(6)
		if(td.firstChild.nodeValue.indexOf('中1') != -1){
			movRowLeft(td.firstChild)
		}else{
			i++;
		}
	}
}

function eighth(){
	var table = document.getElementById('tbl1')
	var collection = table.rows

for(var i=0; i<table.rows.length;){
	var tr = collection.item(i)
	var td = tr.cells.item(6)
		if(td.firstChild.nodeValue.indexOf('中2') != -1){
			movRowLeft(td.firstChild)
		}else{
			i++;
		}
	}
}

function ninth(){
	var table = document.getElementById('tbl1')
	var collection = table.rows

for(var i=0; i<table.rows.length;){
	var tr = collection.item(i)
	var td = tr.cells.item(6)
		if(td.firstChild.nodeValue.indexOf('中3') != -1){
			movRowLeft(td.firstChild)
		}else{
			i++;
		}
	}
}


function swt(oj){
  return oj.parentNode.parentNode.parentNode.parentNode.getAttribute('id')
}

function boxCheck(){

for(var i=0;i<9;i++){
	if(document.chbox.elements[i].checked == true){
		AllNotSend();
		break;
	}
}

for(var i=0;i<9;i++){
	if(document.chbox.elements[i].checked == true){
		if(i==0){first();}
		if(i==1){second();}
		if(i==2){third();}
		if(i==3){fourth();}
		if(i==4){fifth();}
		if(i==5){sixth();}
		if(i==6){seventh();}
		if(i==7){eighth();}
		if(i==8){ninth();}
	}
}

if(document.chbox.elements[0].checked == false &&
document.chbox.elements[1].checked == false &&
document.chbox.elements[2].checked == false &&
document.chbox.elements[3].checked == false &&
document.chbox.elements[4].checked == false &&
document.chbox.elements[5].checked == false &&
document.chbox.elements[6].checked == false &&
document.chbox.elements[7].checked == false &&
document.chbox.elements[8].checked == false){
alert("学年にチェックをつけてください");
}
}

function home(){
	href = "botn.html";
	ret = confirm("スタート画面に戻ります。よろしいですか？");

	if(ret == true){
		location.href = href;
	}
}

