import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import $ from 'jquery'
import { signout } from "./actions/userActions";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import AboutScreen from './screens/AboutScreen';
import ContactScreen from './screens/ContactScreen';
import FAQScreen from './screens/FAQScreen';
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from './screens/LoginScreen';
import MissionVisionScreen from './screens/MissionVisionScreen';
import SignupScreen from './screens/SignupScreen';
import PageNotFoundScreen from './screens/PageNotFoundScreen';
import PlanScreen from './screens/PlanScreen';
import AffiliateScreen from './screens/AffiliateScreen';
import DashboardScreen from './screens/DashboardScreen';

function dropDown(id) {
    var dropElement = document.getElementById(id);
    var element = $(dropElement).parent('li');
    element.toggleClass('open');

    if (element.hasClass('open')) {
        element.removeClass('open');
        element.find('li').toggleClass('open');
        element.find('ul').slideUp(400, "swing");


        console.log('low');
        element.addClass('open');
        element.children('ul').slideDown(400, "swing");
        element.siblings('li').children('ul').slideUp(400, "swing");
        element.siblings('li').toggleClass('open');
        element.siblings('li').find('li').toggleClass('open');
        element.siblings('li').find('ul').slideUp(400, "swing");
    } else {
        element.addClass('open');
        element.children('ul').slideDown(400, "swing");
        element.siblings('li').children('ul').slideUp(400, "swing");
        element.siblings('li').toggleClass('open');
        element.siblings('li').find('li').toggleClass('open');
        element.siblings('li').find('ul').slideUp(400, "swing");


        console.log('hi');
        element.removeClass('open');
        element.find('li').toggleClass('open');
        element.find('ul').slideUp(400, "swing");
    }
}

function App() {
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;
    const dispatch = useDispatch();
    const signoutHandler = () => {
    dispatch(signout());
  };
    
    
    function toggleNav() {
        $('.menu,.header-trigger').toggleClass('active')
        // $('.overlay').toggleClass('overlay-color')
        // $('.overlay').removeClass('active')

        $('html, body').animate({
            scrollTop: 0
        }, 300);
    }


    function toggleOverlay() {
        $('.overlay').removeClass('overlay-color')
        $('.menu, .header-trigger').removeClass('active')
    }



  return (
    <BrowserRouter>
      <div className={userInfo ? 'wrapper' : 'App'}>

        {userInfo ? (

            <>
                {/* <div id="loader"></div> */}

                <header className="main-header">
                    <div className="d-flex align-items-center logo-box justify-content-start">	
                        
                        <a href="/dashboard" className="logo">
                        
                        <div className="logo-mini w-40">
                            <span className="dark-logo"><img src="/images/logo-letter-white.png" alt="logo"/></span>
                        </div>
                        <div className="logo-lg">
                            {/* <span className="light-logo"><img src="/images/logo-light-text.png" alt="logo"/></span> */}
                            {/* <span className="dark-logo"><img src="/images/logo-light-text.png" alt="logo"/></span> */}
                        </div>
                        </a>	
                    </div>   

                    <nav className="navbar navbar-static-top">
                    
                    <div className="app-menu">
                        <ul className="header-megamenu nav">
                            <li className="btn-group nav-item">
                                <a href="#" className="waves-effect waves-light nav-link push-btn btn-primary-light" data-toggle="push-menu" role="button">
                                    <i data-feather="menu"></i>
                                </a>
                            </li>
                            <li className="btn-group d-lg-inline-flex d-none">
                                <div className="app-menu">
                                    <div className="search-bx mx-5">
                                        <form>
                                            <div className="input-group">
                                            <input type="search" className="form-control" placeholder="Search" />
                                            <div className="input-group-append">
                                                <button className="btn" type="submit" id="button-addon3"><i className="icon-Search"><span className="path1"></span><span className="path2"></span></i></button>
                                            </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </li>
                        </ul> 
                    </div>
                        
                    <div className="navbar-custom-menu r-side">
                        <ul className="nav navbar-nav">
                            <li className="btn-group d-md-inline-flex d-none">
                                        <label className="switch">
                                            <span className="waves-effect skin-toggle waves-light">
                                                    <input type="checkbox" data-mainsidebarskin="toggle" id="toggle_left_sidebar_skin"/>
                                                    <span className="switch-on"><i data-feather="moon"></i></span>
                                                    <span className="switch-off"><i data-feather="sun"></i></span>
                                                </span>
                                            </label>
                            </li>
                            <li className="dropdown notifications-menu btn-group ">
                                <a href="#" className="waves-effect waves-light btn-primary-light svg-bt-icon" data-bs-toggle="dropdown" title="Notifications">
                                    <i data-feather="bell"></i>
                                    <div className="pulse-wave"></div>
                                </a>
                                <ul className="dropdown-menu animated bounceIn">
                                <li className="header">
                                    <div className="p-20">
                                        <div className="flexbox">
                                            <div>
                                                <h4 className="mb-0 mt-0">Notifications</h4>
                                            </div>
                                            <div>
                                                <a href="#" className="text-danger">Clear All</a>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>

                                    <ul className="menu sm-scrol">
                                    <li>
                                        <a href="#">
                                        <i className="fa fa-users text-info"></i> Curabitur id eros quis nunc suscipit blandit.
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                        <i className="fa fa-warning text-warning"></i> Duis malesuada justo eu sapien elementum, in semper diam posuere.
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                        <i className="fa fa-users text-danger"></i> Donec at nisi sit amet tortor commodo porttitor pretium a erat.
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                        <i className="fa fa-shopping-cart text-success"></i> In gravida mauris et nisi
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                        <i className="fa fa-user text-danger"></i> Praesent eu lacus in libero dictum fermentum.
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                        <i className="fa fa-user text-primary"></i> Nunc fringilla lorem 
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                        <i className="fa fa-user text-success"></i> Nullam euismod dolor ut quam interdum, at scelerisque ipsum imperdiet.
                                        </a>
                                    </li>
                                    </ul>
                                </li>
                                <li className="footer">
                                    <a href="component_notification.html">View all</a>
                                </li>
                                </ul>
                            </li>
                            <li className="btn-group nav-item d-xl-inline-flex d-none">
                                <a href="#" className="waves-effect waves-light nav-link btn-primary-light svg-bt-icon" title="" id="live-chat">
                                    <i data-feather="message-circle"></i>
                                </a>
                            </li>
                            
                            <li className="btn-group d-xl-inline-flex d-none">
                                <a href="#" className="waves-effect waves-light nav-link btn-primary-light svg-bt-icon dropdown-toggle" data-bs-toggle="dropdown">
                                    <img className="rounded" src="https://investx-admin-template.multipurposethemes.com/New_InvestX-main-files/html/images/svg-icon/usa.svg" alt=""/>
                                </a>
                                <div className="dropdown-menu">
                                    <a className="dropdown-item my-5" href="#"><img className="w-20 rounded me-10" src="https://investx-admin-template.multipurposethemes.com/New_InvestX-main-files/html/images/svg-icon/usa.svg" alt=""/> English</a>
                                    <a className="dropdown-item my-5" href="#"><img className="w-20 rounded me-10" src="https://investx-admin-template.multipurposethemes.com/New_InvestX-main-files/html/images/svg-icon/spain.svg" alt=""/> Spanish</a>
                                    <a className="dropdown-item my-5" href="#"><img className="w-20 rounded me-10" src="https://investx-admin-template.multipurposethemes.com/New_InvestX-main-files/html/images/svg-icon/ger.svg" alt=""/> German</a>
                                    <a className="dropdown-item my-5" href="#"><img className="w-20 rounded me-10" src="https://investx-admin-template.multipurposethemes.com/New_InvestX-main-files/html/images/svg-icon/jap.svg" alt=""/> Japanese</a>
                                    <a className="dropdown-item my-5" href="#"><img className="w-20 rounded me-10" src="https://investx-admin-template.multipurposethemes.com/New_InvestX-main-files/html/images/svg-icon/fra.svg" alt=""/> French</a>
                                </div>
                            </li>
                            
                            <li className="btn-group nav-item d-xl-inline-flex d-none">
                                <a href="#" data-provide="fullscreen" className="waves-effect waves-light nav-link btn-primary-light svg-bt-icon" title="Full Screen">
                                    <i data-feather="maximize"></i>
                                </a>
                            </li>					  

                            <li className="btn-group nav-item d-xl-inline-flex d-none">
                            <a href="#" data-toggle="control-sidebar" title="Setting" className="waves-effect waves-light nav-link btn-primary-light svg-bt-icon">
                                <i data-feather="sliders"></i>
                            </a>
                        </li>
                            

                        <li className="dropdown user user-menu">
                                <a href="#" className="waves-effect waves-light dropdown-toggle w-auto l-h-12 bg-transparent p-0 no-shadow" title="User" data-bs-toggle="modal" data-bs-target="#quick_user_toggle">
                                    <img src="/images/avatar/avatar-13.png" className="avatar rounded bg-primary-light" alt="" />
                                </a>
                            </li>
                            
                        </ul>
                    </div>
                    </nav>
                </header>

                <aside className="main-sidebar">
    
                    <section className="sidebar position-relative"> 
                        <div className="multinav">
                        <div className="multinav-scroll" style={{ height: '97%' }}>	
                            
                            <ul className="sidebar-menu" data-widget="tree">				
                                <li className="treeview">
                                <a href="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                                    <span>Dashboard</span>
                                    <span className="pull-right-container">
                                    <i className="fa fa-angle-right pull-right"></i>
                                    </span>
                                </a>
                                <ul className="treeview-menu">
                                        <li>
                                            <li><a href="index.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Dashboard 1</a></li>
                                            <li><a href="index2.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Dashboard 2</a></li>
                                            <li><a href="index3.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Dashboard 3</a></li>
                                        </li>	
                                </ul>
                                </li>
                                
                                
                                <li>
                                <a href="invest.html">
                                    <i data-feather="dollar-sign"></i>
                                    <span>Invest</span>
                                </a>
                                </li> 
                                <li>
                                <a href="holding.html">
                                    <i data-feather="plus-square"></i>
                                    <span>Holding</span>
                                </a>
                                </li>
                                
                                <li>
                                <a href="extra_profile.html">
                                    <i data-feather="user"></i>
                                    <span>My Account</span>
                                </a>
                                </li>
                                <li>
                                <a href="setting.html">
                                    <i data-feather="settings"></i>
                                    <span>Settings</span>
                                </a>
                                </li>

                                <li>
                                    <Link to="/" onClick={signoutHandler}>
                                        <i data-feather="settings"></i>
                                        <span>Sign Out</span>
                                    </Link>
                                </li>
                                
                                <li className="header">Components</li>
                                <li className="treeview">
                                <a href="#">
                                    <i data-feather="edit"></i>
                                    <span>Features</span>
                                    <span className="pull-right-container">
                                    <i className="fa fa-angle-right pull-right"></i>
                                    </span>
                                </a>
                                <ul className="treeview-menu">											
                                    <li className="treeview">
                                        <a href="#">
                                            <i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Card
                                            <span className="pull-right-container">
                                                <i className="fa fa-angle-right pull-right"></i>
                                            </span>
                                        </a>
                                        <ul className="treeview-menu">
                                            <li><a href="box_cards.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>User Card</a></li>
                                            <li><a href="box_advanced.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Advanced Card</a></li>
                                            <li><a href="box_basic.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Basic Card</a></li>
                                            <li><a href="box_color.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Card Color</a></li>
                                            <li><a href="box_group.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Card Group</a></li>
                                        </ul>
                                    </li>												
                                    <li className="treeview">
                                        <a href="#">
                                            <i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>BS UI
                                            <span className="pull-right-container">
                                                <i className="fa fa-angle-right pull-right"></i>
                                            </span>
                                        </a>
                                        <ul className="treeview-menu">
                                            <li><a href="ui_grid.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Grid System</a></li>
                                            <li><a href="ui_badges.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Badges</a></li>
                                            <li><a href="ui_border_utilities.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Border</a></li>
                                            <li><a href="ui_buttons.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Buttons</a></li>	
                                            <li><a href="ui_color_utilities.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Color</a></li>
                                            <li><a href="ui_dropdown.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Dropdown</a></li>
                                            <li><a href="ui_dropdown_grid.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Dropdown Grid</a></li>
                                            <li><a href="ui_progress_bars.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Progress Bars</a></li>
                                        </ul>
                                    </li>										
                                    <li className="treeview">
                                        <a href="#">
                                            <i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Icons
                                            <span className="pull-right-container">
                                                <i className="fa fa-angle-right pull-right"></i>
                                            </span>
                                        </a>
                                        <ul className="treeview-menu">
                                            <li><a href="icons_fontawesome.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Font Awesome</a></li>
                                            <li><a href="icons_glyphicons.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Glyphicons</a></li>
                                            <li><a href="icons_material.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Material Icons</a></li>	
                                            <li><a href="icons_themify.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Themify Icons</a></li>
                                            <li><a href="icons_simpleline.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Simple Line Icons</a></li>
                                            <li><a href="icons_cryptocoins.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Cryptocoins Icons</a></li>
                                            <li><a href="icons_flag.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Flag Icons</a></li>
                                            <li><a href="icons_weather.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Weather Icons</a></li>
                                        </ul>
                                    </li>									
                                    <li className="treeview">
                                        <a href="#">
                                            <i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Custom UI
                                            <span className="pull-right-container">
                                                <i className="fa fa-angle-right pull-right"></i>
                                            </span>
                                        </a>
                                        <ul className="treeview-menu">
                                            <li><a href="ui_ribbons.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Ribbons</a></li>
                                            <li><a href="ui_sliders.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Sliders</a></li>
                                            <li><a href="ui_typography.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Typography</a></li>
                                            <li><a href="ui_tab.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Tabs</a></li>
                                            <li><a href="ui_timeline.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Timeline</a></li>
                                            <li><a href="ui_timeline_horizontal.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Horizontal Timeline</a></li>
                                        </ul>
                                    </li>
                                    <li className="treeview">
                                        <a href="#">
                                            <i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Components
                                            <span className="pull-right-container">
                                                <i className="fa fa-angle-right pull-right"></i>
                                            </span>
                                        </a>
                                        <ul className="treeview-menu">
                                            <li><a href="component_bootstrap_switch.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Bootstrap Switch</a></li>
                                            <li><a href="component_date_paginator.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Date Paginator</a></li>
                                            <li><a href="component_media_advanced.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Advanced Medias</a></li>
                                            <li><a href="component_rangeslider.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Range Slider</a></li>
                                            <li><a href="component_rating.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Ratings</a></li>
                                            <li><a href="component_animations.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Animations</a></li>
                                            <li><a href="extension_fullscreen.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Fullscreen</a></li>
                                            <li><a href="extension_pace.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Pace</a></li>
                                            <li><a href="component_nestable.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Nestable</a></li>
                                            <li><a href="component_portlet_draggable.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Draggable Portlets</a></li>	
                                        </ul>
                                    </li>  
                                </ul>
                                </li>		
                                <li className="treeview">
                                <a href="#">
                                    <i data-feather="pie-chart"></i>
                                    <span>Forms & Charts</span>
                                    <span className="pull-right-container">
                                    <i className="fa fa-angle-right pull-right"></i>
                                    </span>
                                </a>					
                                <ul className="treeview-menu">					
                                    <li className="treeview">
                                        <a href="#">
                                            <i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Forms
                                            <span className="pull-right-container">
                                                <i className="fa fa-angle-right pull-right"></i>
                                            </span>
                                        </a>
                                        <ul className="treeview-menu">
                                            <li><a href="forms_advanced.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Form Elements</a></li>
                                            <li><a href="forms_general.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Form Layout</a></li>
                                            <li><a href="forms_wizard.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Form Wizard</a></li>	
                                            <li><a href="forms_validation.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Form Validation</a></li>
                                            <li><a href="forms_mask.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Formatter</a></li>
                                            <li><a href="forms_xeditable.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Xeditable Editor</a></li>
                                            <li><a href="forms_dropzone.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Dropzone</a></li>
                                            <li><a href="forms_code_editor.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Code Editor</a></li>
                                            <li><a href="forms_editors.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Editor</a></li>
                                            <li><a href="forms_editor_markdown.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Markdown</a></li>
                                        </ul>
                                    </li>  
                                    <li className="treeview">
                                        <a href="#">
                                            <i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Charts
                                            <span className="pull-right-container">
                                                <i className="fa fa-angle-right pull-right"></i>
                                            </span>
                                        </a>
                                        <ul className="treeview-menu">
                                            <li className="treeview">
                                                <a href="#">
                                                    <i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Basic Charts
                                                    <span className="pull-right-container">
                                                        <i className="fa fa-angle-right pull-right"></i>
                                                    </span>
                                                </a>
                                                <ul className="treeview-menu">
                                                    <li><a href="charts_chartjs.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>ChartJS</a></li>
                                                    <li><a href="charts_flot.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Flot</a></li>
                                                    <li><a href="charts_inline.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Inline charts</a></li>
                                                    <li><a href="charts_morris.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Morris</a></li>
                                                    <li><a href="charts_peity.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Peity</a></li>
                                                    <li><a href="charts_chartist.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Chartist</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="charts_apex.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Apex Chart</a></li>
                                            <li className="treeview">
                                                <a href="#">
                                                    <i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>C3 Charts
                                                    <span className="pull-right-container">
                                                        <i className="fa fa-angle-right pull-right"></i>
                                                    </span>
                                                </a>
                                                <ul className="treeview-menu">
                                                    <li><a href="charts_c3_axis.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Axis Chart</a></li>
                                                    <li><a href="charts_c3_bar.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Bar Chart</a></li>
                                                    <li><a href="charts_c3_data.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Data Chart</a></li>
                                                    <li><a href="charts_c3_line.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Line Chart</a></li>
                                                </ul>
                                            </li>
                                            <li className="treeview">
                                                <a href="#">
                                                    <i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>eCharts
                                                    <span className="pull-right-container">
                                                        <i className="fa fa-angle-right pull-right"></i>
                                                    </span>
                                                </a>
                                                <ul className="treeview-menu">
                                                    <li><a href="charts_echarts_basic.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Basic Charts</a></li>
                                                    <li><a href="charts_echarts_bar.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Bar Chart</a></li>
                                                    <li><a href="charts_echarts_pie_doughnut.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Pie Chart</a></li>
                                                </ul>
                                            </li>							
                                        </ul>
                                    </li>
                                </ul>
                                </li>			
                                <li className="treeview">
                                <a href="#">
                                    <i data-feather="grid"></i>
                                    <span>Tables</span>
                                    <span className="pull-right-container">
                                    <i className="fa fa-angle-right pull-right"></i>
                                    </span>
                                </a>					
                                <ul className="treeview-menu">					
                                    <li><a href="tables_simple.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Simple tables</a></li>
                                    <li><a href="tables_data.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Data tables</a></li>
                                    <li><a href="tables_editable.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Editable Tables</a></li>
                                    <li><a href="tables_color.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Table Color</a></li>					
                                </ul>
                                </li>				 
                                <li className="treeview">
                                <a href="#">
                                    <i data-feather="database"></i>
                                    <span>Apps & Widgets</span>
                                    <span className="pull-right-container">
                                    <i className="fa fa-angle-right pull-right"></i>
                                    </span>
                                </a>
                                <ul className="treeview-menu">					
                                    <li className="treeview">
                                        <a href="#">
                                            <i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Apps
                                            <span className="pull-right-container">
                                                <i className="fa fa-angle-right pull-right"></i>
                                            </span>
                                        </a>
                                        <ul className="treeview-menu">
                                            <li><a href="extra_calendar.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Calendar</a></li>
                                            <li><a href="extra_taskboard.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Todo</a></li>
                                            <li><a href="mailbox.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Mailbox</a></li>
                                            <li><a href="contact_userlist_grid.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Staff Members</a></li>				
                                            <li><a href="extra_profile.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Profile</a></li>	
                                            <li><a href="billing.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Billing</a></li>
                                            <li><a href="extra_app_ticket.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Support Ticket</a></li>
                                            <li><a href="contact_app_chat.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Chat</a></li>
                                            <li><a href="file_manager.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>File Manager</a></li>
                                            <li><a href="contact_app.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Clients</a></li>
                                        </ul>
                                    </li>										
                                    <li className="treeview">
                                        <a href="#">
                                            <i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Widgets
                                            <span className="pull-right-container">
                                                <i className="fa fa-angle-right pull-right"></i>
                                            </span>
                                        </a>
                                        <ul className="treeview-menu">
                                            <li className="treeview">
                                                <a href="#">
                                                    <i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Custom
                                                    <span className="pull-right-container">
                                                        <i className="fa fa-angle-right pull-right"></i>
                                                    </span>
                                                </a>
                                                <ul className="treeview-menu">
                                                    <li><a href="widgets_blog.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Blog</a></li>
                                                    <li><a href="widgets_chart.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Chart</a></li>
                                                    <li><a href="widgets_list.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>List</a></li>
                                                    <li><a href="widgets_social.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Social</a></li>
                                                    <li><a href="widgets_statistic.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Statistic</a></li>
                                                    <li><a href="widgets_weather.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Weather</a></li>
                                                    <li><a href="widgets.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Widgets</a></li>
                                                    <li><a href="email_index.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Emails</a></li>	
                                                </ul>
                                            </li>											  	
                                            <li className="treeview">
                                                <a href="#">
                                                    <i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Maps
                                                    <span className="pull-right-container">
                                                        <i className="fa fa-angle-right pull-right"></i>
                                                    </span>
                                                </a>
                                                <ul className="treeview-menu">
                                                    <li><a href="map_google.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Google Map</a></li>
                                                    <li><a href="map_vector.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Vector Map</a></li>
                                                </ul>
                                            </li>					  	
                                            <li className="treeview">
                                                <a href="#">
                                                    <i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Modals
                                                    <span className="pull-right-container">
                                                        <i className="fa fa-angle-right pull-right"></i>
                                                    </span>
                                                </a>
                                                <ul className="treeview-menu">
                                                    <li><a href="component_modals.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Modals</a></li>
                                                    <li><a href="component_sweatalert.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Sweet Alert</a></li>
                                                    <li><a href="component_notification.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Toastr</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>					
                                    <li className="treeview">
                                        <a href="#">
                                            <i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Ecommerce
                                            <span className="pull-right-container">
                                                <i className="fa fa-angle-right pull-right"></i>
                                            </span>
                                        </a>
                                        <ul className="treeview-menu">
                                            <li><a href="ecommerce_products.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Products</a></li>
                                            <li><a href="ecommerce_cart.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Products Cart</a></li>
                                            <li><a href="ecommerce_products_edit.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Products Edit</a></li>
                                            <li><a href="ecommerce_details.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Product Details</a></li>
                                            <li><a href="ecommerce_orders.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Product Orders</a></li>
                                            <li><a href="ecommerce_checkout.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Products Checkout</a></li>
                                        </ul>
                                    </li>
                                    <li className="treeview">
                                        <a href="#">
                                            <i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Sample Pages
                                            <span className="pull-right-container">
                                                <i className="fa fa-angle-right pull-right"></i>
                                            </span>
                                        </a>
                                        <ul className="treeview-menu">
                                            <li><a href="invoice.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Invoice</a></li>
                                            <li><a href="invoice_2.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Invoice 2</a></li>
                                            <li><a href="invoicelist.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Invoice List</a></li>
                                            <li><a href="invoicelist_2.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Invoice List 2</a></li>	
                                            <li><a href="contact_userlist.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Userlist</a></li>	
                                            <li><a href="sample_faq.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>FAQs</a></li>
                                            <li><a href="sample_blank.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Blank</a></li>
                                            <li><a href="sample_coming_soon.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Coming Soon</a></li>
                                            <li><a href="sample_custom_scroll.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Custom Scrolls</a></li>
                                            <li><a href="sample_gallery.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Gallery</a></li>
                                            <li><a href="sample_lightbox.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Lightbox Popup</a></li>
                                            <li><a href="sample_pricing.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Pricing</a></li>
                                        </ul>
                                    </li>
                                </ul>
                                </li>	 
                                <li className="treeview">
                                <a href="#">
                                    <i data-feather="lock"></i>
                                    <span>Authentication</span>
                                    <span className="pull-right-container">
                                    <i className="fa fa-angle-right pull-right"></i>
                                    </span>
                                </a>
                                <ul className="treeview-menu">
                                    <li>
                                        <a href="auth_login.html" target="_blank" className="d-light"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Login</a>
                                        <a href="auth_login_dark.html" target="_blank" className="d-dark"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Login</a>
                                    </li>
                                    <li>
                                        <a href="auth_register.html" target="_blank" className="d-light"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Register</a>
                                        <a href="auth_register_dark.html" target="_blank" className="d-dark"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Register</a>
                                    </li>
                                    <li>
                                        <a href="auth_lockscreen.html" target="_blank" className="d-light"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Lockscreen</a>
                                        <a href="auth_lockscreen_dark.html" target="_blank" className="d-dark"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Lockscreen</a>
                                    </li>
                                    <li>
                                        <a href="auth_user_pass.html" target="_blank" className="d-light"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Recover password</a>
                                        <a href="auth_user_pass_dark.html" target="_blank" className="d-dark"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Recover password</a>
                                    </li>	
                                </ul>
                                </li>
                                <li className="treeview">
                                <a href="#">
                                    <i data-feather="alert-triangle"></i>
                                    <span>Miscellaneous</span>
                                    <span className="pull-right-container">
                                    <i className="fa fa-angle-right pull-right"></i>
                                    </span>
                                </a>
                                <ul className="treeview-menu">
                                    <li>
                                        <a href="error_404.html" target="_blank" className="d-light"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Error 404</a>
                                        <a href="error_404_dark.html" target="_blank" className="d-dark"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Error 404</a>
                                    </li>
                                    <li>
                                        <a href="error_500.html" target="_blank" className="d-light"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Error 500</a>
                                        <a href="error_500_dark.html" target="_blank" className="d-dark"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Error 500</a>
                                    </li>
                                    <li>
                                        <a href="error_maintenance.html" target="_blank" className="d-light"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Maintenance</a>
                                        <a href="error_maintenance_dark.html" target="_blank" className="d-dark"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Maintenance</a>
                                    </li>	
                                </ul>
                                </li>	 	     
                            </ul>
                            
                            <div className="sidebar-widgets">
                                <div className="mx-25 mb-30 pb-20 side-bx bg-primary-light rounded20">
                                    <div className="text-center">
                                        <img src="https://investx-admin-template.multipurposethemes.com/New_InvestX-main-files/html/images/svg-icon/color-svg/custom-32.svg" className="sideimg p-5" alt=""/>
                                        <h4 className="title-bx text-primary">Best Invest Portal</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </section>
                </aside>

            </>
        ) : (
            <>
                <div className="overlay" onClick={toggleOverlay}></div>

                <header className="header">
                    <div className="header-bottom">
                        <div className="container">
                        <div className="header-area">
                            <div className="logo">
                                <Link to="/">
                                    <img src="/assets/images/logo.png" alt="logo" />
                                </Link>
                            </div>
                            <div className="header-trigger d-block d-lg-none" onClick={toggleNav}>
                                <span></span>
                            </div>
                            <ul className="menu">
                                <li>
                                    <Link to="/" onClick={toggleNav}>Home</Link>
                                </li>

                                <li>
                                    <Link to="/about" onClick={toggleNav}>About</Link>
                                </li>

                                <li>
                                    <Link to="/plan" onClick={toggleNav}>Plans</Link>
                                </li>

                                {/* <li className="has-sub-menu" onClick={dropDown}>
                                    <Link to="#" id="plan" onClick={
                                        (e) => {
                                            e.preventDefault();
                                            dropDown('plan')
                                        }
                                    }>Plan</Link>
                                    <ul className="sub-menu">
                                        <li>
                                            <Link to="/bronze" onClick={toggleNav}>Bronze Plan</Link>
                                        </li>
                                        <li>
                                            <Link to="/silver" onClick={toggleNav}>Silver Plan</Link>
                                        </li>
                                        <li>
                                            <Link to="/gold" onClick={toggleNav}>Gold Plan</Link>
                                        </li>
                                    </ul>
                                </li> */}

                                <li>
                                    <Link to="/mission-vision" onClick={toggleNav}>Mission & Vision</Link>
                                </li>

                                <li>
                                    <Link to="/faq" onClick={toggleNav}>Faq</Link>
                                </li>

                                <li>
                                    <Link to="/affiliate" onClick={toggleNav}>Affiliate</Link>
                                </li>
                            
                                <li>
                                    <Link to="/contact" onClick={toggleNav}>Contact</Link>
                                </li>
                                
                                <li className="has-sub-menu">
                                    
                                    <>
                                        <Link to="#" id="account" onClick={
                                            (e) => {
                                                e.preventDefault();
                                                dropDown('account')
                                            }
                                        }>Account</Link>
                                        <ul className="sub-menu">
                                            <li>
                                                <Link to="/login" onClick={toggleNav}>Log In</Link>
                                            </li>
                                            <li>
                                                <Link to="/sign-up" onClick={toggleNav}>Sign Up</Link>
                                            </li>
                                        </ul>
                                    </>

                                </li>
                                <li>
                                    <a href="investment-plan-01.html" className="cmn--btn">Invest Now</a>
                                </li>
                            </ul>
                        </div>
                        </div>
                    </div>
                </header>
            
            </>
        ) }

        

        <main style={{ minHeight: "280px",     backgroundColor: "#fff" }}>
          <Routes>
            <Route path="/" element={<HomeScreen />} exact></Route>
            <Route path="/about" element={<AboutScreen />}></Route>
            <Route path="/plan" element={<PlanScreen />}></Route>
            <Route path="/mission-vision" element={<MissionVisionScreen />}></Route>
            <Route path="/faq" element={<FAQScreen />}></Route>
            <Route path="/affiliate" element={<AffiliateScreen />}></Route>
            <Route path="/contact" element={<ContactScreen />}></Route>
            <Route path="/login" element={<LoginScreen />}></Route>
            <Route path="/sign-up" element={<SignupScreen />}></Route>
            <Route path="/dashboard" element={<DashboardScreen />}></Route>
            <Route path="*" element={<PageNotFoundScreen />}></Route>
          </Routes> 
        </main>

        {userInfo ? (

            <footer className="main-footer">
                <div className="pull-right d-none d-sm-inline-block">
                    <ul className="nav nav-primary nav-dotted nav-dot-separated justify-content-center justify-content-md-end">
                    <li className="nav-item">
                        <a className="nav-link" href="#" target="_blank">Purchase Now</a>
                    </li>
                    </ul>
                </div>
                &copy; {(new Date().getFullYear())} All Rights Reserved.
            </footer>

        ) : (

            <footer className="footer-section bg_img" style={{ background: "url(/assets/images/footer/bg.png) no-repeat center top" }}>
                <div className="container">
                    <div className="row gy-5">
                        <div className=" col-xl-3 col-lg-5 col-md-6 col-sm-6">
                            <div className="footer-widget">
                                <h3 className="widget-title">Know About Us</h3>
                                <p>
                                    Mega Expert Finance is an investment platform legally registered with all the relevant authorities online, providing secure, smart trading through our team of professionals with the aim of minimizing losses and maximizing profits for investors.
                                </p>
                                <ul className="social-icons">
                                    <li>
                                        <Link to="#">
                                            <i className="lab la-facebook-f"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            <i className="lab la-twitter"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            <i className="lab la-instagram"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            <i className="lab la-linkedin-in"></i>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className=" col-xl-3 col-lg-4 col-md-4 col-sm-6">
                            <div className="footer-widget">
                                <h4 className="widget-title">Company</h4>
                                <ul className="footer-links">
                                    <li>
                                        <Link to="/faq">
                                            
                                        <i className="las la-angle-double-right"></i>Faq</Link>
                                    </li>
                                    <li>
                                        <Link to="/about">
                                            
                                        <i className="las la-angle-double-right"></i>About</Link>
                                    </li>
                                    <li>
                                        <Link to="/contact">
                                            
                                        <i className="las la-angle-double-right"></i>Support</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className=" col-xl-3 col-lg-4 col-sm-6 col-md-4">
                            <div className="footer-widget">
                                <h4 className="widget-title">Useful Link</h4>
                                <ul className="footer-links">
                                    <li>
                                        <Link to="/mission-vision">
                                        <i className="las la-angle-double-right"></i>Mission & Vision</Link>
                                    </li> 
                                    <li>
                                        <Link to="/affiliate">
                                        <i className="las la-angle-double-right"></i>Affiliate</Link>
                                    </li>
                                    <li>
                                        <Link to="/Login">   
                                        <i className="las la-angle-double-right"></i>Login</Link>
                                    </li>
                                    <li>
                                        <Link to="/sign-up"> 
                                        <i className="las la-angle-double-right"></i>Signup</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className=" col-xl-3 col-lg-4 col-sm-6 col-md-4">
                            <div className="footer-widget">
                                <h4 className="widget-title">Investment</h4>
                                <ul className="footer-links">
                                    <li>
                                        <Link to="/plan">
                                            
                                        <i className="las la-angle-double-right"></i>
                                        All Plan</Link>
                                    </li>
                                    <li>
                                        <Link to="/bronze">
                                            
                                        <i className="las la-angle-double-right"></i>
                                        Bronze Plan</Link>
                                    </li>
                                    <li>
                                        <Link to="/silver">
                                            
                                        <i className="las la-angle-double-right"></i>
                                        Silver Plan</Link>
                                    </li>
                                    <li>
                                        <Link to="/gold">
                                            
                                        <i className="las la-angle-double-right"></i>
                                        Gold Plan </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="container">
                    <p className="text-center text-white pt-4 p-sm-5 pb-0">Copyright &copy; {(new Date().getFullYear())}. All Rights Reserved</p>
                    </div>
                </div>
            </footer>

        )}

        {userInfo ? 
        (
            <>
                <div className="modal modal-right fade" id="quick_user_toggle" tabindex="-1">
                    <div className="modal-dialog">
                    <div className="modal-content slim-scroll3">
                        <div className="modal-body p-30 bg-white">
                        <div className="d-flex align-items-center justify-content-between pb-30">
                            <h4 className="m-0">User Profile
                            <small className="text-fade fs-12 ms-5">12 messages</small></h4>
                            <a href="#" className="btn btn-icon btn-primary-light btn-sm no-shadow" data-bs-dismiss="modal">
                                <span className="fa fa-close"></span>
                            </a>
                        </div>
                        <div>
                            <div className="d-flex flex-row">
                                <div className=""><img src="../../../images/avatar/avatar-13.png" alt="user" className="rounded bg-primary-light w-150" width="100"/></div>
                                <div className="ps-20">
                                    <h5 className="mb-0">Nil Yeager</h5>
                                    <p className="my-5 text-fade">Manager</p>
                                    <a href="mailto:dummy@gmail.com"><span className="icon-Mail-notification me-5 text-primary"><span className="path1"></span><span className="path2"></span></span> dummy@gmail.com</a>
                                    <button className="btn btn-primary-light btn-sm mt-5"><i className="ti-plus"></i> Follow</button>
                                </div>
                            </div>
                        </div>
                            <div className="dropdown-divider my-30"></div>
                            <div>
                            <div className="d-flex align-items-center mb-30">
                                <div className="me-15 bg-primary-light h-50 w-50 l-h-60 rounded text-center">
                                        <span className="icon-Library fs-24"><span className="path1"></span><span className="path2"></span></span>
                                </div>
                                <div className="d-flex flex-column fw-500">
                                    <a href="extra_profile.html" className="text-dark hover-primary mb-1 fs-16">My Profile</a>
                                    <span className="text-fade">Account settings and more</span>
                                </div>
                            </div>
                            <div className="d-flex align-items-center mb-30">
                                <div className="me-15 bg-primary-light h-50 w-50 l-h-60 rounded text-center">
                                    <span className="icon-Write fs-24"><span className="path1"></span><span className="path2"></span></span>
                                </div>
                                <div className="d-flex flex-column fw-500">
                                    <a href="mailbox.html" className="text-dark hover-primary mb-1 fs-16">My Messages</a>
                                    <span className="text-fade">Inbox and tasks</span>
                                </div>
                            </div>
                            <div className="d-flex align-items-center mb-30">
                                <div className="me-15 bg-primary-light h-50 w-50 l-h-60 rounded text-center">
                                    <span className="icon-Group-chat fs-24"><span className="path1"></span><span className="path2"></span></span>
                                </div>
                                <div className="d-flex flex-column fw-500">
                                    <a href="setting.html" className="text-dark hover-primary mb-1 fs-16">Settings</a>
                                    <span className="text-fade">Accout Settings</span>
                                </div>
                            </div>
                            <div className="d-flex align-items-center mb-30">
                                <div className="me-15 bg-primary-light h-50 w-50 l-h-60 rounded text-center">
                                    <span className="icon-Attachment1 fs-24"><span className="path1"></span><span className="path2"></span><span className="path3"></span><span className="path4"></span></span>
                                </div>
                                <div className="d-flex flex-column fw-500">
                                    <a href="extra_taskboard.html" className="text-dark hover-primary mb-1 fs-16">Project</a>
                                    <span className="text-fade">latest tasks and projects</span>
                                </div>
                            </div>
                            </div>
                            <div className="dropdown-divider my-30"></div>
                            <div>
                            <div className="media-list">
                                <a className="media media-single px-0" href="#">
                                    <h4 className="w-50 text-gray fw-500">10:10</h4>
                                    <div className="media-body ps-15 bs-5 rounded border-primary">
                                    <p>Morbi quis ex eu arcu auctor sagittis.</p>
                                    <span className="text-fade">by Johne</span>
                                    </div>
                                </a>

                                <a className="media media-single px-0" href="#">
                                    <h4 className="w-50 text-gray fw-500">08:40</h4>
                                    <div className="media-body ps-15 bs-5 rounded border-success">
                                    <p>Proin iaculis eros non odio ornare efficitur.</p>
                                    <span className="text-fade">by Amla</span>
                                    </div>
                                </a>

                                <a className="media media-single px-0" href="#">
                                    <h4 className="w-50 text-gray fw-500">07:10</h4>
                                    <div className="media-body ps-15 bs-5 rounded border-info">
                                    <p>In mattis mi ut posuere consectetur.</p>
                                    <span className="text-fade">by Josef</span>
                                    </div>
                                </a>

                                <a className="media media-single px-0" href="#">
                                    <h4 className="w-50 text-gray fw-500">01:15</h4>
                                    <div className="media-body ps-15 bs-5 rounded border-danger">
                                    <p>Morbi quis ex eu arcu auctor sagittis.</p>
                                    <span className="text-fade">by Rima</span>
                                    </div>
                                </a>

                                <a className="media media-single px-0" href="#">
                                    <h4 className="w-50 text-gray fw-500">23:12</h4>
                                    <div className="media-body ps-15 bs-5 rounded border-warning">
                                    <p>Morbi quis ex eu arcu auctor sagittis.</p>
                                    <span className="text-fade">by Alaxa</span>
                                    </div>
                                </a>
                                <a className="media media-single px-0" href="#">
                                    <h4 className="w-50 text-gray fw-500">10:10</h4>
                                    <div className="media-body ps-15 bs-5 rounded border-primary">
                                    <p>Morbi quis ex eu arcu auctor sagittis.</p>
                                    <span className="text-fade">by Johne</span>
                                    </div>
                                </a>

                                <a className="media media-single px-0" href="#">
                                    <h4 className="w-50 text-gray fw-500">08:40</h4>
                                    <div className="media-body ps-15 bs-5 rounded border-success">
                                    <p>Proin iaculis eros non odio ornare efficitur.</p>
                                    <span className="text-fade">by Amla</span>
                                    </div>
                                </a>

                                <a className="media media-single px-0" href="#">
                                    <h4 className="w-50 text-gray fw-500">07:10</h4>
                                    <div className="media-body ps-15 bs-5 rounded border-info">
                                    <p>In mattis mi ut posuere consectetur.</p>
                                    <span className="text-fade">by Josef</span>
                                    </div>
                                </a>

                                <a className="media media-single px-0" href="#">
                                    <h4 className="w-50 text-gray fw-500">01:15</h4>
                                    <div className="media-body ps-15 bs-5 rounded border-danger">
                                    <p>Morbi quis ex eu arcu auctor sagittis.</p>
                                    <span className="text-fade">by Rima</span>
                                    </div>
                                </a>

                                <a className="media media-single px-0" href="#">
                                    <h4 className="w-50 text-gray fw-500">23:12</h4>
                                    <div className="media-body ps-15 bs-5 rounded border-warning">
                                    <p>Morbi quis ex eu arcu auctor sagittis.</p>
                                    <span className="text-fade">by Alaxa</span>
                                    </div>
                                </a>
                                </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>


                <aside className="control-sidebar">
	  
                    <div className="rpanel-title"><span className="pull-right btn btn-circle btn-danger" data-toggle="control-sidebar"><i className="ion ion-close text-white" ></i></span> </div>  
                    <ul className="nav nav-tabs control-sidebar-tabs">
                        <li className="nav-item"><a href="#control-sidebar-home-tab" data-bs-toggle="tab" ><i className="mdi mdi-message-text"></i></a></li>
                        <li className="nav-item"><a href="#control-sidebar-settings-tab" data-bs-toggle="tab"><i className="mdi mdi-playlist-check"></i></a></li>
                    </ul>
                    
                    <div className="tab-content">
                    
                    <div className="tab-pane" id="control-sidebar-home-tab">
                        <div className="flexbox">
                            <a href="javascript:void(0)" className="text-grey">
                                <i className="ti-more"></i>
                            </a>	
                            <p>Users</p>
                            <a href="javascript:void(0)" className="text-end text-grey"><i className="ti-plus"></i></a>
                        </div>
                        <div className="lookup lookup-sm lookup-right d-none d-lg-block">
                            <input type="text" name="s" placeholder="Search" className="w-p100"/>
                        </div>
                        <div className="media-list media-list-hover mt-20">
                            <div className="media py-10 px-0">
                            <a className="avatar avatar-lg status-success" href="#">
                                <img src="../../../images/avatar/1.jpg" alt="..."/>
                            </a>
                            <div className="media-body">
                                <p className="fs-16">
                                <a className="hover-primary" href="#"><strong>Tyler</strong></a>
                                </p>
                                <p>Praesent tristique diam...</p>
                                <span>Just now</span>
                            </div>
                            </div>

                            <div className="media py-10 px-0">
                            <a className="avatar avatar-lg status-danger" href="#">
                                <img src="../../../images/avatar/2.jpg" alt="..."/>
                            </a>
                            <div className="media-body">
                                <p className="fs-16">
                                <a className="hover-primary" href="#"><strong>Luke</strong></a>
                                </p>
                                <p>Cras tempor diam ...</p>
                                <span>33 min ago</span>
                            </div>
                            </div>

                            <div className="media py-10 px-0">
                            <a className="avatar avatar-lg status-warning" href="#">
                                <img src="../../../images/avatar/3.jpg" alt="..."/>
                            </a>
                            <div className="media-body">
                                <p className="fs-16">
                                <a className="hover-primary" href="#"><strong>Evan</strong></a>
                                </p>
                                <p>In posuere tortor vel...</p>
                                <span>42 min ago</span>
                            </div>
                            </div>

                            <div className="media py-10 px-0">
                            <a className="avatar avatar-lg status-primary" href="#">
                                <img src="../../../images/avatar/4.jpg" alt="..."/>
                            </a>
                            <div className="media-body">
                                <p className="fs-16">
                                <a className="hover-primary" href="#"><strong>Evan</strong></a>
                                </p>
                                <p>In posuere tortor vel...</p>
                                <span>42 min ago</span>
                            </div>
                            </div>			
                            
                            <div className="media py-10 px-0">
                            <a className="avatar avatar-lg status-success" href="#">
                                <img src="../../../images/avatar/1.jpg" alt="..."/>
                            </a>
                            <div className="media-body">
                                <p className="fs-16">
                                <a className="hover-primary" href="#"><strong>Tyler</strong></a>
                                </p>
                                <p>Praesent tristique diam...</p>
                                <span>Just now</span>
                            </div>
                            </div>

                            <div className="media py-10 px-0">
                            <a className="avatar avatar-lg status-danger" href="#">
                                <img src="../../../images/avatar/2.jpg" alt="..."/>
                            </a>
                            <div className="media-body">
                                <p className="fs-16">
                                <a className="hover-primary" href="#"><strong>Luke</strong></a>
                                </p>
                                <p>Cras tempor diam ...</p>
                                <span>33 min ago</span>
                            </div>
                            </div>

                            <div className="media py-10 px-0">
                            <a className="avatar avatar-lg status-warning" href="#">
                                <img src="../../../images/avatar/3.jpg" alt="..."/>
                            </a>
                            <div className="media-body">
                                <p className="fs-16">
                                <a className="hover-primary" href="#"><strong>Evan</strong></a>
                                </p>
                                <p>In posuere tortor vel...</p>
                                <span>42 min ago</span>
                            </div>
                            </div>

                            <div className="media py-10 px-0">
                            <a className="avatar avatar-lg status-primary" href="#">
                                <img src="../../../images/avatar/4.jpg" alt="..."/>
                            </a>
                            <div className="media-body">
                                <p className="fs-16">
                                <a className="hover-primary" href="#"><strong>Evan</strong></a>
                                </p>
                                <p>In posuere tortor vel...</p>
                                <span>42 min ago</span>
                            </div>
                            </div>
                            
                        </div>

                    </div>
                    
                    <div className="tab-pane" id="control-sidebar-settings-tab">
                        <div className="flexbox">
                            <a href="javascript:void(0)" className="text-grey">
                                <i className="ti-more"></i>
                            </a>	
                            <p>Todo List</p>
                            <a href="javascript:void(0)" className="text-end text-grey"><i className="ti-plus"></i></a>
                        </div>
                        <ul className="todo-list mt-20">
                            <li className="py-15 px-5 by-1">
                            
                            <input type="checkbox" id="basic_checkbox_1" className="filled-in"/>
                            <label for="basic_checkbox_1" className="mb-0 h-15"></label>
                            
                            <span className="text-line">Nulla vitae purus</span>
                            
                            <small className="badge bg-danger"><i className="fa fa-clock-o"></i> 2 mins</small>
                            
                            <div className="tools">
                                <i className="fa fa-edit"></i>
                                <i className="fa fa-trash-o"></i>
                            </div>
                            </li>
                            <li className="py-15 px-5">
                            
                            <input type="checkbox" id="basic_checkbox_2" className="filled-in"/>
                            <label for="basic_checkbox_2" className="mb-0 h-15"></label>
                            <span className="text-line">Phasellus interdum</span>
                            <small className="badge bg-info"><i className="fa fa-clock-o"></i> 4 hours</small>
                            <div className="tools">
                                <i className="fa fa-edit"></i>
                                <i className="fa fa-trash-o"></i>
                            </div>
                            </li>
                            <li className="py-15 px-5 by-1">
                            
                            <input type="checkbox" id="basic_checkbox_3" className="filled-in"/>
                            <label for="basic_checkbox_3" className="mb-0 h-15"></label>
                            <span className="text-line">Quisque sodales</span>
                            <small className="badge bg-warning"><i className="fa fa-clock-o"></i> 1 day</small>
                            <div className="tools">
                                <i className="fa fa-edit"></i>
                                <i className="fa fa-trash-o"></i>
                            </div>
                            </li>
                            <li className="py-15 px-5">
                            
                            <input type="checkbox" id="basic_checkbox_4" className="filled-in"/>
                            <label for="basic_checkbox_4" className="mb-0 h-15"></label>
                            <span className="text-line">Proin nec mi porta</span>
                            <small className="badge bg-success"><i className="fa fa-clock-o"></i> 3 days</small>
                            <div className="tools">
                                <i className="fa fa-edit"></i>
                                <i className="fa fa-trash-o"></i>
                            </div>
                            </li>
                            <li className="py-15 px-5 by-1">
                            
                            <input type="checkbox" id="basic_checkbox_5" className="filled-in"/>
                            <label for="basic_checkbox_5" className="mb-0 h-15"></label>
                            <span className="text-line">Maecenas scelerisque</span>
                            <small className="badge bg-primary"><i className="fa fa-clock-o"></i> 1 week</small>
                            <div className="tools">
                                <i className="fa fa-edit"></i>
                                <i className="fa fa-trash-o"></i>
                            </div>
                            </li>
                            <li className="py-15 px-5">
                            
                            <input type="checkbox" id="basic_checkbox_6" className="filled-in"/>
                            <label for="basic_checkbox_6" className="mb-0 h-15"></label>
                            <span className="text-line">Vivamus nec orci</span>
                            <small className="badge bg-info"><i className="fa fa-clock-o"></i> 1 month</small>
                            <div className="tools">
                                <i className="fa fa-edit"></i>
                                <i className="fa fa-trash-o"></i>
                            </div>
                            </li>
                            <li className="py-15 px-5 by-1">
                            
                            <input type="checkbox" id="basic_checkbox_7" className="filled-in"/>
                            <label for="basic_checkbox_7" className="mb-0 h-15"></label>
                            
                            <span className="text-line">Nulla vitae purus</span>
                            
                            <small className="badge bg-danger"><i className="fa fa-clock-o"></i> 2 mins</small>
                            
                            <div className="tools">
                                <i className="fa fa-edit"></i>
                                <i className="fa fa-trash-o"></i>
                            </div>
                            </li>
                            <li className="py-15 px-5">
                            
                            <input type="checkbox" id="basic_checkbox_8" className="filled-in"/>
                            <label for="basic_checkbox_8" className="mb-0 h-15"></label>
                            <span className="text-line">Phasellus interdum</span>
                            <small className="badge bg-info"><i className="fa fa-clock-o"></i> 4 hours</small>
                            <div className="tools">
                                <i className="fa fa-edit"></i>
                                <i className="fa fa-trash-o"></i>
                            </div>
                            </li>
                            <li className="py-15 px-5 by-1">
                            
                            <input type="checkbox" id="basic_checkbox_9" className="filled-in"/>
                            <label for="basic_checkbox_9" className="mb-0 h-15"></label>
                            <span className="text-line">Quisque sodales</span>
                            <small className="badge bg-warning"><i className="fa fa-clock-o"></i> 1 day</small>
                            <div className="tools">
                                <i className="fa fa-edit"></i>
                                <i className="fa fa-trash-o"></i>
                            </div>
                            </li>
                            <li className="py-15 px-5">
                            
                            <input type="checkbox" id="basic_checkbox_10" className="filled-in"/>
                            <label for="basic_checkbox_10" className="mb-0 h-15"></label>
                            <span className="text-line">Proin nec mi porta</span>
                            <small className="badge bg-success"><i className="fa fa-clock-o"></i> 3 days</small>
                            <div className="tools">
                                <i className="fa fa-edit"></i>
                                <i className="fa fa-trash-o"></i>
                            </div>
                            </li>
                        </ul>
                    </div>
                    
                    </div>
                </aside>

                <div class="control-sidebar-bg"></div>


                <div id="chat-box-body">
                    <div id="chat-circle" className="waves-effect waves-circle btn btn-circle btn-sm btn-warning l-h-50">
                        <div id="chat-overlay"></div>
                        <span className="icon-Group-chat fs-18"><span className="path1"></span><span className="path2"></span></span>
                    </div>

                    <div className="chat-box">
                        <div className="chat-box-header p-15 d-flex justify-content-between align-items-center">
                            <div className="btn-group">
                            <button className="waves-effect waves-circle btn btn-circle btn-primary-light h-40 w-40 rounded-circle l-h-50" type="button" data-bs-toggle="dropdown">
                                <span className="icon-Add-user fs-22"><span className="path1"></span><span className="path2"></span></span>
                            </button>
                            <div className="dropdown-menu min-w-200">
                                <a className="dropdown-item fs-16" href="#">
                                    <span className="icon-Color me-15"></span>
                                    New Group</a>
                                <a className="dropdown-item fs-16" href="#">
                                    <span className="icon-Clipboard me-15"><span className="path1"></span><span className="path2"></span><span className="path3"></span><span className="path4"></span></span>
                                    Contacts</a>
                                <a className="dropdown-item fs-16" href="#">
                                    <span className="icon-Group me-15"><span className="path1"></span><span className="path2"></span></span>
                                    Groups</a>
                                <a className="dropdown-item fs-16" href="#">
                                    <span className="icon-Active-call me-15"><span className="path1"></span><span className="path2"></span></span>
                                    Calls</a>
                                <a className="dropdown-item fs-16" href="#">
                                    <span className="icon-Settings1 me-15"><span className="path1"></span><span className="path2"></span></span>
                                    Settings</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item fs-16" href="#">
                                    <span className="icon-Question-circle me-15"><span className="path1"></span><span className="path2"></span></span>
                                    Help</a>
                                <a className="dropdown-item fs-16" href="#">
                                    <span className="icon-Notifications me-15"><span className="path1"></span><span className="path2"></span></span> 
                                    Privacy</a>
                            </div>
                            </div>
                            <div className="text-center flex-grow-1">
                                <div className="text-dark fs-18">Mayra Sibley</div>
                                <div>
                                    <span className="badge badge-sm badge-dot badge-primary"></span>
                                    <span className="text-muted fs-12">Active</span>
                                </div>
                            </div>
                            <div className="chat-box-toggle">
                                <button id="chat-box-toggle" className="waves-effect waves-circle btn btn-circle btn-danger-light h-40 w-40 rounded-circle l-h-50" type="button">
                                <span className="icon-Close fs-22"><span className="path1"></span><span className="path2"></span></span>
                                </button>                    
                            </div>
                        </div>
                        <div className="chat-box-body">
                            <div className="chat-box-overlay">   
                            </div>
                            <div className="chat-logs">
                                <div className="chat-msg user">
                                    <div className="d-flex align-items-center">
                                        <span className="msg-avatar">
                                            <img src="../../../images/avatar/2.jpg" className="avatar avatar-lg" alt=""/>
                                        </span>
                                        <div className="mx-10">
                                            <a href="#" className="text-dark hover-primary fw-bold">Mayra Sibley</a>
                                            <p className="text-muted fs-12 mb-0">2 Hours</p>
                                        </div>
                                    </div>
                                    <div className="cm-msg-text">
                                        Hi there, I'm Jesse and you?
                                    </div>
                                </div>
                                <div className="chat-msg self">
                                    <div className="d-flex align-items-center justify-content-end">
                                        <div className="mx-10">
                                            <a href="#" className="text-dark hover-primary fw-bold">You</a>
                                            <p className="text-muted fs-12 mb-0">3 minutes</p>
                                        </div>
                                        <span className="msg-avatar">
                                            <img src="../../../images/avatar/3.jpg" className="avatar avatar-lg" alt=""/>
                                        </span>
                                    </div>
                                    <div className="cm-msg-text">
                                    My name is Anne Clarc.         
                                    </div>        
                                </div>
                                <div className="chat-msg user">
                                    <div className="d-flex align-items-center">
                                        <span className="msg-avatar">
                                            <img src="../../../images/avatar/2.jpg" className="avatar avatar-lg" alt=""/>
                                        </span>
                                        <div className="mx-10">
                                            <a href="#" className="text-dark hover-primary fw-bold">Mayra Sibley</a>
                                            <p className="text-muted fs-12 mb-0">40 seconds</p>
                                        </div>
                                    </div>
                                    <div className="cm-msg-text">
                                        Nice to meet you Anne.<br/>How can i help you?
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="chat-input">      
                            <form>
                                <input type="text" id="chat-input" placeholder="Send a message..."/>
                                <button type="submit" className="chat-submit" id="chat-submit">
                                    <span className="icon-Send fs-22"></span>
                                </button>
                            </form>      
                        </div>
                    </div>
                </div>
            </>
        ) : ('')}

      </div>
    </BrowserRouter>

  );
}

export default App;
