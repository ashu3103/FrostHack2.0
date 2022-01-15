import React from 'react'

export default function code() {
    return (
        <div>
        <meta name="keywords" content="tech,event,hack,hackathon,2020,frosthack,iit,mandi,fest,latest,trending" />
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags */}
        <title>FrostHack | IIT Mandi</title>
        {/* favicon */}
        <link rel="icon" href="./img/logos/favi.png" type="image/x-icon" />
        <link rel="shortcut icon" href="./img/logos/favi.png" type="image/x-icon" />
        {/* Google font */}
        <link href="https://fonts.googleapis.com/css?family=Poppins:400,700,900" rel="stylesheet" />
        {/* Bootstrap */}
        <link type="text/css" rel="stylesheet" href="css/bootstrap.min.css" />
        {/* Owl Carousel */}
        <link type="text/css" rel="stylesheet" href="css/owl.carousel.css" />
        <link type="text/css" rel="stylesheet" href="css/owl.theme.default.css" />
        {/* Font Awesome Icon */}
        <link rel="stylesheet" href="fontAwesome/css/all.min.css" />
        {/* <link rel="stylesheet" href="css/font-awesome.min.css"> */}
        {/* Custom stlylesheet */}
        <link type="text/css" rel="stylesheet" href="css/style.css" />
        <link rel="stylesheet" href="css/index.css" />
        <style dangerouslySetInnerHTML={{__html: "\n\t\t.conduct-container {\n\t\t\tpadding-top: 20px;\n\t\t\tmargin-left: 20px;\n\t\t\twidth: 75%;\n\t\t}\n\n\t\t.conduct-container ul {\n\t\t\tlist-style-type: disc;\n\t\t\tpadding-left: 50px;\n\t\t}\n\n\t\t#codeconduct .col-lg-8 {\n\t\t\tmargin-bottom: 80px;\n\t\t}\n\n\t\t@media only screen and (max-width: 767px) {\n\t\t\t.conduct-container {\n\t\t\t\twidth: 100%;\n\t\t\t}\n\t\t}\n\t" }} />
        {/* Header */}
        <header id="header" className="transparent-navbar navTop">
          <marquee id="timeline" className="changecolor" onmouseover="this.stop();" onmouseout="this.start();">
          </marquee>
          {/* container */}
          <div className="container">
            {/* navbar header */}
            <div className="navbar-header">
              {/* Logo */}
              <div className="navbar-brand">
                <a className="logo" href="#home">
                  <img className="logo-img" src="./img/logos/wide-small-white.png" alt="logo" />
                  <img className="logo-alt-img" src="./img/logos/wide-small.png" alt="logo" />
                </a>
              </div>
              {/* /Logo */}
              {/* Mobile toggle */}
              <button className="navbar-toggle">
                <i className="fas fa-bars" />
              </button>
              {/* /Mobile toggle */}
            </div>
            {/* /navbar header */}
            {/* Navigation */}
            <nav id="nav">
              <ul className="main-nav nav navbar-nav navbar-right">
                {/* <li><a href="#home">Top</a></li> */}
                <li><a href="/index.html#about">about</a></li>
                <li><a href="/index.html#schedule">schedule</a></li>
                {/* <li><a href="#themes">Themes</a></li> */}
                <li><a href="/index.html#sponsors">sponsors</a></li>
                <li><a href="/index.html#faq">faq</a></li>
                <li><a href="judges.html">Judges</a></li>
                <li><a href="mentors.html">Mentors</a></li>
                <li><a href="team.html">team</a></li>
              </ul>
            </nav>
            {/* /Navigation */}
          </div>
          {/* /container */}
        </header>
        {/* /Header */}
        {/* team */}
        <div id="codeconduct" className="section" style={{marginTop: '10vh'}}>
          {/* container */}
          <div className="container">
            {/* row */}
            <div className="row">
              {/* section title */}
              <div className="section-title">
                <h3 className="title"><span>Code of</span> <span style={{color: '#dd0a37'}}>Conduct</span></h3>
              </div>
              {/* /section title */}
              {/* code of conduct */}
              <div className="col-lg-8">
                <div className="container">
                  <h2>The Quick Version</h2>
                  <hr />
                  <div className="conduct-container">
                    <p>
                      Hackathons hosted on Devfolio are
                      dedicated to providing a safe and comfortable environment and harassment-free
                      experience
                      for everyone, regardless of the following:
                    </p>
                    <ul>
                      <li>gender</li>
                      <li>gender identity and expression</li>
                      <li>age</li>
                      <li>sexual orientation</li>
                      <li>disability</li>
                      <li>physical appearance</li>
                      <li>body size</li>
                      <li>race</li>
                      <li>ethnicity</li>
                      <li>nationality</li>
                      <li>religion</li>
                      <li>political views</li>
                      <li>previous hackathon attendance or lack of</li>
                      <li>computing experience or lack of</li>
                      <li>chosen programming language or tech stack</li>
                    </ul>
                    <br />
                    <p>
                      We do not tolerate harassment of hackathon
                      participants in any form. Sexual language and imagery is not appropriate at any
                      hackathon venue, this includes the following:
                    </p>
                    <ul>
                      <li>hacks</li>
                      <li>talks, presentations, or demos</li>
                      <li>workshops</li>
                      <li>any parties associated to the hackathon</li>
                      <li>social media</li>
                      <li>any other online media</li>
                    </ul>
                    <br />
                    <p>
                      Hackathon participants violating these
                      rules
                      <strong>may be sanctioned or expelled</strong>
                      from the hackathon
                      <strong>without a refund</strong>
                      (if applicable) at the discretion of the hackathon organisers.
                    </p>
                  </div>
                </div>
              </div>
              {/* /code of conduct */}
              {/* code of conduct */}
              <div className="col-lg-8">
                <div className="container">
                  <h2>The Less Quick Version</h2>
                  <hr />
                  <div className="conduct-container">
                    <p>
                      Harassment includes offensive verbal
                      comments related to gender, gender identity and expression, age, sexual orientation,
                      disability, physical appearance, body size, race, ethnicity, nationality, religion
                      or political views, sexual images in public spaces, deliberate intimidation,
                      stalking, following, photography or audio/video recording against reasonable
                      consent, sustained disruption of talks or other events, inappropriate physical
                      contact, and unwelcome sexual attention.
                    </p>
                    <p>
                      Photography is encouraged, but other
                      participants must be given a reasonable chance to opt out from being photographed.
                      If they object to the taking of their photograph, comply with their request. It is
                      inappropriate to take photographs in contexts where people have a reasonable
                      expectation of privacy (in bathrooms or where participants are sleeping).
                    </p>
                    <p>
                      Participants asked to stop any
                      harassing behavior are expected to comply immediately.
                    </p>
                    <p>
                      As this is a hackathon, we like to
                      explicitly note that the hacks created at our hackathon are equally subject to the
                      anti-harassment policy.
                    </p>
                    <p>
                      Sponsors and partners are also subject
                      to the anti-harassment policy. In particular, sponsors should not use sexualised
                      images, activities, or other material. Sponsor representatives (including
                      volunteers) should not use sexualised clothing/uniforms/costumes, or otherwise
                      create a sexualised environment.
                    </p>
                    <p>
                      If you are being harassed, notice that
                      someone else is being harassed, or have any other concerns, please contact a member
                      of hackathon staff immediately.
                    </p>
                    <p>
                      Hackathon staff will be happy to help
                      participants contact any local security or local law enforcement, provide escorts,
                      or otherwise assist those experiencing harassment to feel safe for the duration of
                      the hackathon. We value your attendance.
                    </p>
                    <p>
                      If a participant engages in harassing
                      behavior, the hackathon organisers may take any action they deem appropriate. This
                      includes warning the offender, expulsion from the hackathon with no refund (if
                      applicable), or reporting their behaviour to local law enforcement.
                    </p>
                    <p>
                      We expect participants to follow these
                      rules at hackathon and workshop venues and hackathon-related social events.</p><br />
                    <p>
                      Our code of conduct is based on the
                      <a href="https://hackcodeofconduct.org/" target="_blank" rel="noopener noreferrer">Hack
                        Code of Conduct</a>.
                    </p>
                  </div>
                </div>
              </div>
              {/* /code of conduct */}
            </div>
            {/* /row */}
          </div>
          {/* /container */}
        </div>
        {/* /team */}
        {/* Contact */}
        <div id="contact" className="section">
          {/* container */}
          <div className="container">
            {/* row */}
            <div className="row">
              {/* section title */}
              <div className="section-title">
                <h3 className="title"><span>Contact</span> <span style={{color: '#dd0a37'}}>Us</span></h3>
              </div>
              {/* /section title */}
              {/* contact */}
              <div className="col-sm-3">
                <div className="contact">
                  <i className="fas fa-map-marked-alt fa-4x" />
                  <h3 className="mt-3">Address</h3>
                  <a className="changecolor" href="https://goo.gl/maps/6kq6iLFDopCikWVH7">
                    IIT Mandi,
                    Kamand,
                    Himachal Pradesh
                  </a>
                </div>
              </div>
              {/* /contact */}
              {/* contact */}
              <div className="col-sm-3">
                <div className="contact">
                  <i className="fas fa-phone fa-4x" />
                  <h3 className="mt-3">Phone</h3>
                  <p><a href="tel:+919654855054" className="changecolor">Nehal : +919654855054</a></p>
                  <p><a href="tel:+917987590764" className="changecolor">Shubhanshu : +917987590764</a></p>
                </div>
              </div>
              {/* /contact */}
              {/* contact */}
              <div className="col-sm-3">
                <div className="contact">
                  <i className="fas fa-envelope fa-4x" />
                  <h3 className="mt-3">Email</h3>
                  <a href="mailto:teamfrosthack@gmail.com" className="changecolor">teamfrosthack@gmail.com</a>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="contact">
                  <i className="fab fa-discord fa-4x" />
                  <h3 className="mt-3">Discord Server</h3>
                  <a href="https://discord.com/invite/YsV3MJ7ke2" className="changecolor">Invite Link</a>
                </div>
              </div>
              <img id="theme-toggle" src="img/sun.svg" onclick="themechange()" />
              {/* /contact */}
              {/* contact */}
              {/* <div class="col-sm-3">
					<div class="contact">
						<img src="img/zulip.svg" alt="zulipchat">
						<h3 class="mt-3">Zulip</h3>
						<a href="https://frosthack.zulipchat.com/">frosthack.zulipchat.com</a>
					</div>
				</div> */}
              {/* /contact */}
            </div>
            {/* /row */}
          </div>
          {/* /container */}
        </div>
        {/* /Contact */}
        {/* Footer */}
        <footer id="footer">
          {/* container */}
          <div className="container">
            {/* row */}
            <div className="row">
              {/* footer logo */}
              <div className="col-md-4 col-md-push-4">
                <div className="footer-brand">
                  <a className="logo" href="#home">
                    <img className="logo-img" src="./img/logos/wide.png" alt="logo" />
                  </a>
                </div>
                <div className="contact-social">
                  <a target="_blank" href="https://www.facebook.com/frosthackiitmandi/"><i className="fab fa-facebook fa-2x" /></a>
                  <a target="_blank" href="https://www.instagram.com/frosthack_iitmandi/"><i className="fab fa-instagram fa-2x" /></a>
                  <a target="_blank" href="https://frosthack.zulipchat.com/"> <img src="img/zulip.svg" alt="" />
                  </a>
                </div>
                <div className="centered-code">
                  <a href="code.html">Code of Conduct</a>
                </div>
              </div>
              {/* /footer logo */}
            </div>
            {/* /row */}
          </div>
          {/* /container */}
        </footer>
        {/* /Footer */}
        {/* jQuery Plugins */}
      </div>
    
    )
}
