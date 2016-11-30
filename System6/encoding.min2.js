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

function swt(oj){
  return oj.parentNode.parentNode.parentNode.parentNode.getAttribute('id')
}

<!--
function movAllRight(){
 var targetTable = document.getElementById(tbl0)
 
//移動するやつ
for(var i=0;i<tbl0.row.length;i++){
var tr = collection.item(i);
var td = tr.cells.item(1);
    }
}