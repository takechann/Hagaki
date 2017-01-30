// Microsoft Wordで使用する定数
var wdFormLetters       = 0;
var wdOpenFormatText    = 4;
var wdSendToNewDocument = 0;
var wdDoNotSaveChanges  = 0;

// Microsoft Wordのテンプレートのパスを格納するための変数
var pathTemplate = String(location.href).replace(/html\/origin.html/gi, "templates/print.doc");

// タイマー変数
var idTimer = "";

// Microsoft Wordではがきの宛名を印刷するための関数
function printDoc() {
	var wdApplication = null;
	var wdDocument    = null;
	var wdMailMerge   = null;

	var filename = "";

	var savePrintBackground = true;

	// 入力されているデータファイル名を取得する
	filename = document.getElementById("filename").value;

	// Microsoft Wordアプリケーションオブジェクトのインスタンスを生成する
	wdApplication = new ActiveXObject("Word.Application");

	// 差し込み印刷のメイン文書としてテンプレートを開く
	wdDocument = wdApplication.Documents.Open(pathTemplate);

	// MailMergeオブジェクトのプロパティを設定する
	wdMailMerge = wdDocument.MailMerge;

	// 差し込み印刷のメイン文書の種類を定型書簡にする
	wdMailMerge.MainDocumentType = wdFormLetters;

	// 差し込み印刷のメイン文書にデータファイルを結合する
	wdMailMerge.OpenDataSource(
		filename,			/// Name
		wdOpenFormatText,		/// Format
		false,				/// ConfirmConversions
		false,				/// ReadOnly
		true,				/// LinkToSource
		false,				/// AddToRecentFiles
		"",				/// PasswordDocument
		"",				/// PasswordTemplate
		false,				/// Revert
		"",				/// WritePasswordDocument
		"",				/// WritePasswordTemplate
		"",				/// Connection
		"", 				/// SQLStatement
		""				/// SQLStatement1
	);

	// 差し込み文書の送り先を新規文書にする
	wdMailMerge.Destination = wdSendToNewDocument;

	// 指定したデータの差し込みを実行する
	wdMailMerge.Execute(true);

	// テンプレートを閉じる
	wdDocument.Saved  = true;
	wdDocument.Close(false);

	// Microsoft Wordを表示する
	wdApplication.Visible = true;

	// 作成した新規文書の印刷プレビューを表示する
	wdApplication.ActiveDocument.PrintPreview();

	// ガベージコレクションを実行し、Microsoft Wordへの参照を解放する
	idTimer = window.setInterval("cleanup();",1);
}

// ガベージコレクションを実行しMicrosoft Wordへの参照を解放するための関数
function cleanup() {
	clearInterval(idTimer);
	CollectGarbage();
}
