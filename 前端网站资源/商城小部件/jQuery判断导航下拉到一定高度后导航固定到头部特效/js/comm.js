$(window).bind("scroll",
			function() {
				var st = $(document).scrollTop();
				nt = nt ? nt: $("#J_m_nav").offset().top;
				if (nt < st) {
					$("#J_m_nav").addClass("nav_fixed");
					$('#J_m_head').css('margin-bottom', '50px');
				} else {
					$("#J_m_nav").removeClass("nav_fixed");
					$('#J_m_head').css('margin-bottom', '10px');
				}
			});