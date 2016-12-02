// Microsoft Word�Ŏg�p����萔
var wdFormLetters       = 0;
var wdOpenFormatText    = 4;
var wdSendToNewDocument = 0;
var wdDoNotSaveChanges  = 0;

// Microsoft Word�̃e���v���[�g�̃p�X���i�[���邽�߂̕ϐ�
var pathTemplate = String(location.href).replace(/html\/origin.html/gi, "templates/print.doc");

// �^�C�}�[�ϐ�
var idTimer = "";

// Microsoft Word�ł͂����̈�����������邽�߂̊֐�
function printDoc() {
	var wdApplication = null;
	var wdDocument    = null;
	var wdMailMerge   = null;

	var filename = "";

	var savePrintBackground = true;

	// ���͂���Ă���f�[�^�t�@�C�������擾����
	filename = document.getElementById("filename").value;

	// Microsoft Word�A�v���P�[�V�����I�u�W�F�N�g�̃C���X�^���X�𐶐�����
	wdApplication = new ActiveXObject("Word.Application");

	// �������݈���̃��C�������Ƃ��ăe���v���[�g���J��
	wdDocument = wdApplication.Documents.Open(pathTemplate);

	// MailMerge�I�u�W�F�N�g�̃v���p�e�B��ݒ肷��
	wdMailMerge = wdDocument.MailMerge;

	// �������݈���̃��C�������̎�ނ��^���Ȃɂ���
	wdMailMerge.MainDocumentType = wdFormLetters;

	// �������݈���̃��C�������Ƀf�[�^�t�@�C������������
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

	// �������ݕ����̑�����V�K�����ɂ���
	wdMailMerge.Destination = wdSendToNewDocument;

	// �w�肵���f�[�^�̍������݂����s����
	wdMailMerge.Execute(true);

	// �e���v���[�g�����
	wdDocument.Saved  = true;
	wdDocument.Close(false);

	// Microsoft Word��\������
	wdApplication.Visible = true;

	// �쐬�����V�K�����̈���v���r���[��\������
	wdApplication.ActiveDocument.PrintPreview();

	// �K�x�[�W�R���N�V���������s���AMicrosoft Word�ւ̎Q�Ƃ��������
	idTimer = window.setInterval("cleanup();",1);
}

// �K�x�[�W�R���N�V���������s��Microsoft Word�ւ̎Q�Ƃ�������邽�߂̊֐�
function cleanup() {
	clearInterval(idTimer);
	CollectGarbage();
}
