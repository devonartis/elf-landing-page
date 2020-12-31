let Deco_Constructor = {
	load_more: function (e) {
		e.preventDefault();

		let obj = jQuery(this);
		let page = obj.attr('data-page');
		let per_page = obj.attr('data-per_page');
		let pages = obj.attr('data-pages');
		let post_type = obj.attr('data-post_type');

		let cat_ids = obj.data('cat_ids');

		let section = obj.closest('section');

		section.css({'opacity': 0.3});

		jQuery.ajax({
			type   : 'GET',
			url    : '/wp-admin/admin-ajax.php',
			data   : {
				action : 'deco_constructor_load_more_posts',
				page   : page,
				per_page : per_page,
				pages: pages,
				post_type: post_type,
				cat_ids: cat_ids
			},
			success: function (a) {
				try {
					if (a.success === true) {

						if (a.data.html) {
							section.find("[class*='__grid']").append(a.data.html);
							if (a.data.html !== false) {
								obj.attr('data-page', a.data.page);

								if(a.data.hide)
									obj.hide();
							}
						}
					}
				} catch (e) {

				}
				section.removeAttr('style');
			},
			errors : function (e) {

			}
		});

		return false;
	},
	get_posts_from_categories: function (e) {
		e.preventDefault();

		let obj = jQuery(this);
		let cat_ids = obj.data('ids');
		let section = obj.closest('.section-wiki');

		section.find('a.is-current').removeClass('is-current');
		obj.addClass('is-current');
		section.find('.section-wiki__loop').addClass('is_loading');

		section.css({'opacity': 0.3});

		jQuery.ajax({
			type   : 'GET',
			url    : '/wp-admin/admin-ajax.php',
			data   : {
				action : 'deco_constructor_get_posts_from_categories',
				cat_ids: cat_ids
			},
			success: function (a) {
				try {
					if (a.success === true) {
						if (a.data.html) {

							section.find('.section-wiki-results').html('');
							section.find('.section-wiki-results').append(a.data.html);
							section.find('.js_load_more').attr('data-pages',a.data.max_num_pages);
							window.dispatchEvent(new CustomEvent('scroll'));

							if(a.data.hide)
								section.find('.js_load_more').hide();

							section.find('.section-wiki__loop').removeClass('is_loading');
							section.find('.js_load_more').on('click', Deco_Constructor.load_more);
						}
					}
					section.removeAttr('style');
				} catch (e) {

				}

			},
			errors : function (e) {
				console.log(e);
				section.find('.section-wiki__loop').removeClass('is_loading');
			}
		});

		return false;
	},
	init     : function () {
		jQuery(document).ready(function () {
			jQuery('.js_load_more').on('click', Deco_Constructor.load_more);
			jQuery('.js_category_name:not("is-current")').on('click', Deco_Constructor.get_posts_from_categories);
		});
	}
};

Deco_Constructor.init();