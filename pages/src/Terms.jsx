import './Home.css';

function Terms() {
    return (
        <main id='main'>
            <div className="panel">
                <h2 className="panel__title">Terms of Use</h2>
                <div className="panel__text">
                    <p>Please read these Terms of Use (“Terms”) carefully before accessing or participating in any chatroom, newsgroup, bulletin board, mailing list, website, transaction or other on-line forum available at these sites (“Site” or “Sites”).
                        By using and participating in these sites, you signify that you have read these terms and agree to be bound by and comply with them. If you do not agree to be bound by these terms, please promptly exit all sites. This site reserves the right to modify these terms at any time and will publish notice of any such modifications on-line at this site or elsewhere on-line. By continuing to access a site after notice of such modifications has been published, you signify your agreement to be bound by them.</p>
                    <h3 className="panel__title">Age requirements</h3><p>
                        If you’re under the age required to manage your own Google Account, you must have your parent or legal guardian’s permission to use a Google Account. Please have your parent or legal guardian read these terms with you.
                        If you’re a parent or legal guardian, and you allow your child to use the services, then these terms apply to you and you’re responsible for your child’s activity on the services.
                        Some Google services have additional age requirements as described in their service-specific additional terms and policies.</p>
                </div>
            </div>
        </main>
    )
}

export default Terms;
