$(function(){
	
	
const popup = '<div class="popup"><p class="m_txt">본 사이트는 상업적 목적이 아닌 개인 포트폴리오 용도로 제작되었습니다. 일부 내용 및 이미지 등은 출처가 따로 있음을 밝힙니다.</p><i class="fas fa-times"></i></div>'	;
	
	//팝업띄우기
	$('body').append(popup);
	
	const popup = $('.popup i.fas');
	
	popup.click(function(){
//		$('.popup').hide();
//		$('.popup').fadeOut();
//		$('.popup').remove();
		$('.popup').animate({'top':'280px'},200).delay(100).animate({'top':'-580px','opacity':'.5'},300);
	});
	
});
