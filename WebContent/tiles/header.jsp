<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<%@ taglib prefix="s" uri="/struts-tags"%>

<!DOCTYPE html>
<html class="no-js" lang="utf-8">
<head>
</head>
<body>
	<!-- start of :: wrap -->
	<div id="wrap">
		<!-- start of :: header -->
		<div id="header">
			<div class="util_menu">
				<div class="inner_util"><div class="select_brand" style="display:none;" >
					<button type="button" onclick="gateway.show();" style="display:none;" >
						SITE SELECTOR
					</button>

					</div>
                    <div class="gnb_log">
                        <a href="/customer/comment_board_list.asp?BoardMstNo=1" style="float:left;"><img src="../Resources/images/common/pc_banner1.jpg" alt=""></a>
                    </div>
					<div class="gnb_log">
						<a href="main.action"><img src="/Eoullim/Resource/images/common/logo_new.png" alt=""></a>
					</div>
	<s:if test = "member.isadmin == 1">
					<ul>
						<li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</li>
						<li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</li>
						<li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</li>
						<li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</li>
						<li>&nbsp;&nbsp;</li>
						<li>관리자님 환영합니다.</li>
						<li><a href="logoutAction.action">로그아웃</a></li>
					</ul>
						</div>
				</div>
			<!-- //util_menu -->
			<div class="menuHeader" id="miniHeader">
                <div class="M_inner">
                    <div class="row">
                        <div class="col" style="width:20px;">
			                <!-- <a href="#" class="icon-btn-menu"></a> -->
			                <button class="btn_menu" type="button"><span>메뉴</span></button>
		                </div>
                        <div class="col" style="width:20px;" >
			                <a href="/main/main.asp"  class="icon-btn-home" style="display:none;" ></a> 
                            <a href="/main/main.asp"  class="icon-btn-home-big" ></a><!-- full 로고 버전 :  -->
		                </div>
                        <div class="col">
			                <div class="main-input-text">
                                <form action="javascript:searchRun4();" name="searchForm4" method="get"  autocomplete="off">
				                    <input onblur="btn_searchblur();"  value="검색어입력"  onfocus="btn_searchin();"  id="searchItem4"  type="text"/>
                                    <button type="submit" class="btn-search" onblur="change_searchout();"  onfocus="change_searchin();" ></button>
                                </form>
			                </div>
		                </div>
                        <div class="col" style="width:20px;">
			                <a href="/order/cart.asp" class="icon-btn-bell"><i class="new">0</i></a>
		                </div>
                    </div>
                </div>
				<div class="inner" >
                    <h1 class="logo"><a href="/main/main.asp">CELLTRION</a></h1> 
					<div id="gnb" class="gnb">
						<ul class="gnb_r">
							
							<li class="depth1 community ">
								<a href="adminmemberlist.action">회원관리</a>
								<div class="depth2_box">
								</div>
							</li>
							
							<li class="depth1 community ">
								<a href="admingoodslist.action">상품관리</a>
								<div class="depth2_box">
								</div>
							</li>

							<li class="depth1 community ">
								<a href="adminorderlist.action">주문관리</a>
								<div class="depth2_box">
								</div>
							</li>
							<li class="depth1 community ">
								<a href="admincouponlist.action">쿠폰 관리</a>
								<div class="depth2_box">
								</div>
							</li>
							<li class="depth1 category">
								<a href="goodslistAction.action">게시판 관리</a>
								<div class="depth2_box">
									<div class="inner">
									<ul class="depth2">
										<li class="active">
										<a href="adminnoticelist.action">공지사항</a>
										</li>
										<li>
											<a href="adminqnalist.action">Q&A</a>									
										</li>
										<li>
											<a href="adminfaqlist.action">FAQ</a>										
										</li>
									</ul>
									</div>
								</div>
							</li>
						</ul>
						<!-- //gnb_box -->
					</div>
				</div>
			</div>
			<!-- // menuHeader -->
		</div>
		<div class="bg_search_box"></div>
		<!-- // end of :: header  -->
	</s:if>
	<s:else>
					<ul>
                    	<s:if test='%{member_id == null}'>
						<li><a href="loginform.action" class="btn_login">로그인</a></li>
						<li><a href="joinform1.action" class="btn_login">회원가입</a></li>
						</s:if>
						
						<s:else>
						<li><s:property value = "%{member_id}"/>님 환영합니다.</li>
						<li><a href="logoutAction.action">로그아웃</a></li>
						<li><a href="mypagemain.action">마이페이지</a></li>
						</s:else>
                    
						<li><a href="UCListAction.action">장바구니 <span class="num"></span></a></li>
						<li><a href="myorder.action">주문배송조회</a></li>
						<li><a href="faqlistAction.action">고객센터</a></li>
					</ul>
				</div>
			</div>
			<!-- //util_menu -->
			<div class="menuHeader" id="miniHeader">
                <div class="M_inner">
                    <div class="row">
                        <div class="col" style="width:20px;">
			                <!-- <a href="#" class="icon-btn-menu"></a> -->
			                <button class="btn_menu" type="button"><span>메뉴</span></button>
		                </div>
                        <div class="col" style="width:20px;" >
			                <a href="/main/main.asp"  class="icon-btn-home" style="display:none;" ></a> 
                            <a href="/main/main.asp"  class="icon-btn-home-big" ></a><!-- full 로고 버전 :  -->
		                </div>
                        <div class="col">
			                <div class="main-input-text">
                                <form action="javascript:searchRun4();" name="searchForm4" method="get"  autocomplete="off">
				                    <input onblur="btn_searchblur();"  value="검색어입력"  onfocus="btn_searchin();"  id="searchItem4"  type="text"/>
                                    <button type="submit" class="btn-search" onblur="change_searchout();"  onfocus="change_searchin();" ></button>
                                </form>
			                </div>
		                </div>
                        <div class="col" style="width:20px;">
			                <a href="/order/cart.asp" class="icon-btn-bell"><i class="new">0</i></a>
		                </div>
                    </div>
                </div>
				<div class="inner" >
                    <h1 class="logo"><a href="/main/main.asp">CELLTRION</a></h1> 
					<div id="gnb" class="gnb">
						<ul class="gnb_l">
							<li class="depth1 category">
								<a href="goodslistAction.action">SHOPPING</a>
								<div class="depth2_box">
									<div class="inner">
									<ul class="depth2">
										<li class="active">
											<!-- <a href="/product/list.asp">유형별</a> -->
											<a style="cursor: default;">eye</a>
										</li>
										<li>
											<!-- <a href="/product/list.asp">기능별</a> -->
											<a style="cursor: default;">face</a>
										</li>
										<li>
											<!-- <a href="/product/list.asp">브랜드별</a> -->
											<a style="cursor: default;">lib</a>
										</li>
									</ul>
									<div class="depth3">
										<div class="item active">
											<ul class="list">
												<li><a href="goodslistAction.action?listtype=마스카라">마스카라</a></li>				
												<li><a href="goodslistAction.action?listtype=아이섀도우">아이섀도우</a></li>
												<li><a href="goodslistAction.action?listtype=아이팔레트">아이팔레트</a></li>
												<li><a href="goodslistAction.action?listtype=아이라이너">아이라이너</a></li>
												<li><a href="goodslistAction.action?listtype=아이브로우">아이브로우</a></li>
											</ul>
											<div class="banner_area">
												<div id="type_slider" class="menu_slider view1">
	
													<div class="item"><a href="http://www.celltrionskincure.com/event/view.asp?no=1295&Category=1" target="_self"><img src="Resource/data/banner/eye_img.png"/></a></div>
												</div>
											</div>
										</div>
										<div class="item">
											<ul class="list">
	
												<li><a href="goodslistAction.action?listtype=베이스">베이스</a></li>
												<li><a href="goodslistAction.action?listtype=프라이머">프라이머</a></li>
												<li><a href="goodslistAction.action?listtype=블러셔">블러셔</a></li>
												<li><a href="goodslistAction.action?listtype=셰이딩">셰이딩</a></li>
												<li><a href="goodslistAction.action?listtype=하이라이터">하이라이터</a></li>
												<li><a href="goodslistAction.action?listtype=파운데이션">파운데이션</a></li>
												<li><a href="goodslistAction.action?listtype=파우더">파우더</a></li>
											</ul>
											<div class="banner_area">
												<div id="type_slider" class="menu_slider view1">
												<div class="item"><a href="http://www.celltrionskincure.com/search/search_result.asp?sWord=화이트천" target="_self"><img src="Resource/data/banner/face_img.png"/></a></div>
												</div>
											</div>
										</div>
										<div class="item">
											<ul class="list">
	
												<li class="brand_item"><a href="goodslistAction.action?listtype=립스틱">립스틱</a></li>
	
												<li class="brand_item"><a href="goodslistAction.action?listtype=립팔레트">립팔레트</a></li>
	
												<li class="brand_item"><a href="goodslistAction.action?listtype=틴트">틴트</a></li>
	
												<li class="brand_item"><a href="goodslistAction.action?listtype=립락커">립락커</a></li>
											</ul>
											<div class="banner_area">
												<div id="brand_slider" class="menu_slider view1">
													<div class="item"><a href="http://www.celltrionskincure.com/product/list.asp?brand=H" target="_self"><img src="Resource/data/banner/lib_img.png"/></a></div>

												</div>
											</div>
										</div>
									</div>
								</div>
							</li>
						</ul>
	

						<ul class="gnb_r">
							<li class="depth1 brand ">
                                <a >BRAND</a>
								<div class="depth2_box">
									<div class="inner">
										<ul class="depth2">
											<li class="etuidhouse">
												<div class="inner">
													<h3 class="tit">ETUDE HOUSE</h3>
													<ul>
														<li><a href="goodslistAction.action?brandtype=ETUDEHOUSE">상품보기</a></li>
													</ul>
												</div>
											</li>
											<li class="laneige">
												<div class="inner">
													<h3 class="tit">LANEIGE</h3>
													<ul>
														<li><a href="goodslistAction.action?brandtype=LANEIGE">상품보기</a></li>
													</ul>
												</div>
											</li>
											<li class="luna">
												<div class="inner">
													<h3 class="tit">LUNA</h3>
													<ul>
														<li><a href="goodslistAction.action?brandtype=LUNA">상품보기</a></li>
													</ul>
												</div>
											</li>
											<li  class="tonymory">
												<div class="inner">
													<h3 class="tit">TONYMORY</h3>
													<ul>
														<li><a href="goodslistAction.action?brandtype=TONYMORY">상품보기</a></li>
													</ul>
												</div>
											</li>
											<li  class="wlab">
												<div class="inner">
													<h3 class="tit">WLab</h3>
													<ul>
														<li><a href="goodslistAction.action?brandtype=WLAB">상품보기</a></li>
													</ul>
												</div>
											</li>
										</ul>
									</div>
								</div>
							</li>
							<li class="depth1 community ">
								<a href="reviewlistAction.action">REVIEW</a>
								<div class="depth2_box">
								</div>
							</li>

							<li class="depth1 community ">
								<a href="usedlistAction.action">USED</a>
								<div class="depth2_box">
								</div>
							</li>

							<li class="depth1 community ">
								<a href="noticelistAction.action">NOTICE</a>
								<div class="depth2_box">
								</div>
							</li>
							<li class="lab depth1 lab ">
							<!-- 	<a href="니아러">REVIEW</a>
								<div class="depth2_box">
									<div class="inner">
										
									</div>
								</div>
							</li> -->
						</ul>
						<!-- //gnb_box -->
					</div>
				</div>
			</div>
			<!-- // menuHeader -->
		</div>
		<div class="bg_search_box"></div>
		<!-- // end of :: header  -->
		<form name="searchFormReal" method="get"  autocomplete="off" action="/search/search_result.asp" class="acc-hidden">
			<input type="hidden" name="sWord" value />
		</form>
	</s:else>
<!-- dos s -->
</html>