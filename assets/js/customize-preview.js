/**
 * Customizer Preview JS
 *
 * Reloads changes on Theme Customizer Preview asynchronously for better usability
 *
 * @package Occasio Pro
 */

( function( $ ) {

	/* Header Search checkbox */
	wp.customize( 'occasio_theme_options[header_search]', function( value ) {
		value.bind( function( newval ) {
			if ( false === newval ) {
				$( 'body' ).addClass( 'header-search-hidden' );
				$( 'body' ).removeClass( 'header-search-enabled' );
				$( 'body' ).removeClass( 'header-search-and-main-navigation-active' );
			} else {
				$( 'body' ).addClass( 'header-search-enabled' );
				$( 'body' ).removeClass( 'header-search-hidden' );

				if ( $( '.site-header .header-main .primary-navigation' ).length > 0 ) {
					$( 'body' ).addClass( 'header-search-and-main-navigation-active' );
				}
			}
		} );
	} );

	/* Author Bio checkbox */
	wp.customize( 'occasio_theme_options[author_bio]', function( value ) {
		value.bind( function( newval ) {
			if ( false === newval ) {
				$( 'body' ).addClass( 'author-bio-hidden' );
			} else {
				$( 'body' ).removeClass( 'author-bio-hidden' );
			}
		} );
	} );

	/* Primary Color Option */
	wp.customize( 'occasio_theme_options[primary_color]', function( value ) {
		value.bind( function( newval ) {
			document.documentElement.style.setProperty( '--primary-color', newval );
		} );
	} );

	/* Secondary Color Option */
	wp.customize( 'occasio_theme_options[secondary_color]', function( value ) {
		value.bind( function( newval ) {
			document.documentElement.style.setProperty( '--secondary-color', newval );
		} );
	} );

	/* Tertiary Color Option */
	wp.customize( 'occasio_theme_options[tertiary_color]', function( value ) {
		value.bind( function( newval ) {
			document.documentElement.style.setProperty( '--tertiary-color', newval );
		} );
	} );

	/* Accent Color Option */
	wp.customize( 'occasio_theme_options[accent_color]', function( value ) {
		value.bind( function( newval ) {
			document.documentElement.style.setProperty( '--accent-color', newval );
		} );
	} );

	/* Highlight Color Option */
	wp.customize( 'occasio_theme_options[highlight_color]', function( value ) {
		value.bind( function( newval ) {
			document.documentElement.style.setProperty( '--highlight-color', newval );
		} );
	} );

	/* Light Gray Color Option */
	wp.customize( 'occasio_theme_options[light_gray_color]', function( value ) {
		value.bind( function( newval ) {
			document.documentElement.style.setProperty( '--light-gray-color', newval );
		} );
	} );

	/* Gray Color Option */
	wp.customize( 'occasio_theme_options[gray_color]', function( value ) {
		value.bind( function( newval ) {
			document.documentElement.style.setProperty( '--gray-color', newval );
		} );
	} );

	/* Dark Gray Color Option */
	wp.customize( 'occasio_theme_options[dark_gray_color]', function( value ) {
		value.bind( function( newval ) {
			document.documentElement.style.setProperty( '--dark-gray-color', newval );
		} );
	} );

	/* Header Bar Color Option */
	wp.customize( 'occasio_theme_options[header_bar_color]', function( value ) {
		value.bind( function( newval ) {
			var text_color, hover_color, border_color;

			if( isColorLight( newval ) ) {
				text_color = '#151515';
				hover_color = 'rgba(0, 0, 0, 0.5)';
				border_color = 'rgba(0, 0, 0, 0.1)';
			} else {
				text_color = '#fff';
				hover_color = 'rgba(255, 255, 255, 0.5)';
				border_color = 'rgba(255, 255, 255, 0.1)';
			}

			document.documentElement.style.setProperty( '--header-bar-background-color', newval );
			document.documentElement.style.setProperty( '--header-bar-text-color', text_color );
			document.documentElement.style.setProperty( '--header-bar-text-hover-color', hover_color );
			document.documentElement.style.setProperty( '--header-bar-border-color', border_color );
		} );
	} );

	/* Header Color Option */
	wp.customize( 'occasio_theme_options[header_color]', function( value ) {
		value.bind( function( newval ) {
			var text_color, hover_color, border_color;

			if( isColorLight( newval ) ) {
				text_color = '#151515';
				hover_color = 'rgba(0, 0, 0, 0.5)';
				border_color = 'rgba(0, 0, 0, 0.1)';
			} else {
				text_color = '#fff';
				hover_color = 'rgba(255, 255, 255, 0.5)';
				border_color = 'rgba(255, 255, 255, 0.1)';
			}

			document.documentElement.style.setProperty( '--header-background-color', newval );
			document.documentElement.style.setProperty( '--header-text-color', text_color );
			document.documentElement.style.setProperty( '--header-text-hover-color', hover_color );
			document.documentElement.style.setProperty( '--header-border-color', border_color );
		} );
	} );

	/* Link Color Option */
	wp.customize( 'occasio_theme_options[link_color]', function( value ) {
		value.bind( function( newval ) {
			document.documentElement.style.setProperty( '--link-color', newval );
		} );
	} );

	/* Link Color Hover Option */
	wp.customize( 'occasio_theme_options[link_hover_color]', function( value ) {
		value.bind( function( newval ) {
			document.documentElement.style.setProperty( '--link-hover-color', newval );
		} );
	} );

	/* Button Color Option */
	wp.customize( 'occasio_theme_options[button_color]', function( value ) {
		value.bind( function( newval ) {
			document.documentElement.style.setProperty( '--button-color', newval );
		} );
	} );

	/* Button Color Hover Option */
	wp.customize( 'occasio_theme_options[button_hover_color]', function( value ) {
		value.bind( function( newval ) {
			document.documentElement.style.setProperty( '--button-hover-color', newval );
		} );
	} );

	/* Title Color Option */
	wp.customize( 'occasio_theme_options[title_color]', function( value ) {
		value.bind( function( newval ) {
			document.documentElement.style.setProperty( '--title-color', newval );
			document.documentElement.style.setProperty( '--widget-title-color', newval );
		} );
	} );

	/* Title Hover Color Option */
	wp.customize( 'occasio_theme_options[title_hover_color]', function( value ) {
		value.bind( function( newval ) {
			document.documentElement.style.setProperty( '--title-hover-color', newval );
			document.documentElement.style.setProperty( '--widget-title-hover-color', newval );
		} );
	} );

	/* Sidebar & Comments Color Option */
	wp.customize( 'occasio_theme_options[sidebar_comments_color]', function( value ) {
		value.bind( function( newval ) {
			document.documentElement.style.setProperty( '--widget-background-color', newval );
			document.documentElement.style.setProperty( '--post-meta-background-color', newval );
			document.documentElement.style.setProperty( '--comments-background-color', newval );
		} );
	} );

	/* Footer Widgets Color Option */
	wp.customize( 'occasio_theme_options[footer_widgets_color]', function( value ) {
		value.bind( function( newval ) {
			var text_color, link_color, link_hover_color, border_color;

			if( isColorLight( newval ) ) {
				text_color = '#151515';
				link_color = 'rgba(0, 0, 0, 0.6)';
				link_hover_color = '#151515';
				border_color = 'rgba(0, 0, 0, 0.1)';
			} else {
				text_color = '#fff';
				link_color = 'rgba(255, 255, 255, 0.6)';
				link_hover_color = '#fff';
				border_color = 'rgba(255, 255, 255, 0.1)';
			}

			document.documentElement.style.setProperty( '--footer-widgets-background-color', newval );
			document.documentElement.style.setProperty( '--footer-widgets-text-color', text_color );
			document.documentElement.style.setProperty( '--footer-widgets-link-color', link_color );
			document.documentElement.style.setProperty( '--footer-widgets-link-hover-color', link_hover_color );
			document.documentElement.style.setProperty( '--footer-widgets-border-color', border_color );
		} );
	} );

	/* Footer Color Option */
	wp.customize( 'occasio_theme_options[footer_color]', function( value ) {
		value.bind( function( newval ) {
			var text_color, link_color, link_hover_color, border_color;

			if( isColorLight( newval ) ) {
				text_color = 'rgba(0, 0, 0, 0.5)';
				link_color = '#151515';
				link_hover_color = 'rgba(0, 0, 0, 0.5)';
				border_color = 'rgba(0, 0, 0, 0.1)';
			} else {
				text_color = 'rgba(255, 255, 255, 0.5)';
				link_color = '#fff';
				link_hover_color = 'rgba(255, 255, 255, 0.5)';
				border_color = 'rgba(255, 255, 255, 0.1)';
			}

			document.documentElement.style.setProperty( '--footer-background-color', newval );
			document.documentElement.style.setProperty( '--footer-text-color', text_color );
			document.documentElement.style.setProperty( '--footer-link-color', link_color );
			document.documentElement.style.setProperty( '--footer-link-hover-color', link_hover_color );
			document.documentElement.style.setProperty( '--footer-border-color', border_color );
		} );
	} );

	/* Text Font */
	wp.customize( 'occasio_theme_options[text_font]', function( value ) {
		value.bind( function( newval ) {

			// Load Font in Customizer.
			loadCustomFont( newval, 'text-font' );

			// Set Font.
			var systemFont = '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif';
			var newFont = newval === 'SystemFontStack' ? systemFont : newval;

			// Set CSS.
			document.documentElement.style.setProperty( '--text-font', newFont );
		} );
	} );

	/* Title Font */
	wp.customize( 'occasio_theme_options[title_font]', function( value ) {
		value.bind( function( newval ) {

			// Load Font in Customizer.
			loadCustomFont( newval, 'title-font' );

			// Set Font.
			var systemFont = '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif';
			var newFont = newval === 'SystemFontStack' ? systemFont : newval;

			// Set CSS.
			document.documentElement.style.setProperty( '--title-font', newFont );
		} );
	} );

	/* Title Font Weight */
	wp.customize( 'occasio_theme_options[title_is_bold]', function( value ) {
		value.bind( function( newval ) {
			var fontWeight = newval ? 'bold' : 'normal';
			document.documentElement.style.setProperty( '--title-font-weight', fontWeight );
		} );
	} );

	/* Title Text Transform */
	wp.customize( 'occasio_theme_options[title_is_uppercase]', function( value ) {
		value.bind( function( newval ) {
			var textTransform = newval ? 'uppercase' : 'none';
			document.documentElement.style.setProperty( '--title-text-transform', textTransform );
		} );
	} );

	/* Navi Font */
	wp.customize( 'occasio_theme_options[navi_font]', function( value ) {
		value.bind( function( newval ) {

			// Load Font in Customizer.
			loadCustomFont( newval, 'navi-font' );

			// Set Font.
			var systemFont = '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif';
			var newFont = newval === 'SystemFontStack' ? systemFont : newval;

			// Set CSS.
			document.documentElement.style.setProperty( '--navi-font', newFont );
		} );
	} );

	/* Navi Font Weight */
	wp.customize( 'occasio_theme_options[navi_is_bold]', function( value ) {
		value.bind( function( newval ) {
			var fontWeight = newval ? 'bold' : 'normal';
			document.documentElement.style.setProperty( '--navi-font-weight', fontWeight );
		} );
	} );

	/* Navi Text Transform */
	wp.customize( 'occasio_theme_options[navi_is_uppercase]', function( value ) {
		value.bind( function( newval ) {
			var textTransform = newval ? 'uppercase' : 'none';
			document.documentElement.style.setProperty( '--navi-text-transform', textTransform );
		} );
	} );

	/* Widget Title Font */
	wp.customize( 'occasio_theme_options[widget_title_font]', function( value ) {
		value.bind( function( newval ) {

			// Load Font in Customizer.
			loadCustomFont( newval, 'widget-title-font' );

			// Set Font.
			var systemFont = '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif';
			var newFont = newval === 'SystemFontStack' ? systemFont : newval;

			// Set CSS.
			document.documentElement.style.setProperty( '--widget-title-font', newFont );
		} );
	} );

	/* Widget Title Font Weight */
	wp.customize( 'occasio_theme_options[widget_title_is_bold]', function( value ) {
		value.bind( function( newval ) {
			var fontWeight = newval ? 'bold' : 'normal';
			document.documentElement.style.setProperty( '--widget-title-font-weight', fontWeight );
		} );
	} );

	/* Widget Title Text Transform */
	wp.customize( 'occasio_theme_options[widget_title_is_uppercase]', function( value ) {
		value.bind( function( newval ) {
			var textTransform = newval ? 'uppercase' : 'none';
			document.documentElement.style.setProperty( '--widget-title-text-transform', textTransform );
		} );
	} );

	function hexdec( hexString ) {
		hexString = ( hexString + '' ).replace( /[^a-f0-9]/gi, '' );
		return parseInt( hexString, 16 );
	}

	function getColorBrightness( hexColor ) {

		// Remove # string.
		hexColor = hexColor.replace( '#', '' );

		// Convert into RGB.
		var r = hexdec( hexColor.substring( 0, 2 ) );
		var g = hexdec( hexColor.substring( 2, 4 ) );
		var b = hexdec( hexColor.substring( 4, 6 ) );

		return ( ( ( r * 299 ) + ( g * 587 ) + ( b * 114 ) ) / 1000 );
	}

	function isColorLight( hexColor ) {
		return ( getColorBrightness( hexColor ) > 130 );
	}

	function isColorDark( hexColor ) {
		return ( getColorBrightness( hexColor ) <= 130 );
	}

	function loadCustomFont( font, type ) {
		var fontFile = font.split( " " ).join( "+" );
		var fontFileURL = "https://fonts.googleapis.com/css?family=" + fontFile + ":400,700";

		var fontStylesheet = "<link id='occasio-pro-custom-" + type + "' href='" + fontFileURL + "' rel='stylesheet' type='text/css'>";
		var checkLink = $( "head" ).find( "#occasio-pro-custom-" + type ).length;

		if (checkLink > 0) {
			$( "head" ).find( "#occasio-pro-custom-" + type ).remove();
		}
		$( "head" ).append( fontStylesheet );
	}

} )( jQuery );
