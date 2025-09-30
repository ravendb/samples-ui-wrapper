function canRenderWebComponent() {
    return (
        "customElements" in window &&
        "define" in window.customElements &&
        "attachShadow" in Element.prototype &&
        "ShadowRoot" in window
    );
}
  
if (!canRenderWebComponent()) {
    throw new Error("This browser does not support web component!");
}


class SamplesUIWrapper extends HTMLElement {
    baseUrl = "https://ravendb.github.io/samples-ui-wrapper"; // for testing locally set this to "."
    
    constructor() {
        super();
        this.attachShadow({ mode: "open" });

        const stylesElement = document.createElement("link");
        stylesElement.setAttribute("rel", "stylesheet");
        stylesElement.setAttribute("href", `${this.baseUrl}/main.css`);

        const wrapperElement = document.createElement("div");
        wrapperElement.classList.add("samples-ui-wrapper");
        wrapperElement.innerHTML = `
            <div class="header">
                <a href="https://ravendb.net" target="_blank">
                    <img src="${this.baseUrl}/assets/ravendb-logo.svg" alt="RavenDB" class="ravendb-logo" />
                </a>
                <a class="badge-link source-link" href="https://github.com/ravendb" target="_blank">
                    <svg width="10" height="10" viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg" fill="var(--icon-color)" style="scale: 1.5;">
                        <path d="M5.41004 0.605469C2.92504 0.605469 0.909973 2.61999 0.909973 5.10524C0.909973 7.09335 2.19936 8.78005 3.98734 9.37508C4.21222 9.41672 4.29489 9.27744 4.29489 9.1586C4.29489 9.05134 4.29067 8.69683 4.28877 8.32083C3.03679 8.59307 2.77262 7.78991 2.77262 7.78991C2.56799 7.26983 2.27298 7.1315 2.27298 7.1315C1.86471 6.85221 2.30383 6.85796 2.30383 6.85796C2.75559 6.88969 2.99356 7.3217 2.99356 7.3217C3.39497 8.00959 4.04628 7.8107 4.30317 7.69573C4.34349 7.40495 4.46007 7.20638 4.58886 7.09402C3.58928 6.98028 2.53859 6.59439 2.53859 4.87021C2.53859 4.37895 2.7144 3.97751 3.0023 3.66241C2.95557 3.54903 2.80143 3.09139 3.04582 2.47154C3.04582 2.47154 3.4238 2.35068 4.28367 2.93286C4.64258 2.83313 5.02754 2.78314 5.41003 2.7814C5.79237 2.78314 6.17763 2.83313 6.53728 2.93286C7.39627 2.35067 7.77351 2.47154 7.77351 2.47154C8.01848 3.09139 7.86448 3.54903 7.81777 3.66241C8.10623 3.97753 8.2809 4.37896 8.2809 4.87021C8.2809 6.59854 7.22817 6.97905 6.22611 7.09044C6.38751 7.23009 6.5313 7.50391 6.5313 7.92371C6.5313 8.5258 6.52606 9.01037 6.52606 9.15858C6.52606 9.27835 6.60711 9.41867 6.83519 9.37448C8.6222 8.77882 9.90997 7.09272 9.90997 5.10524C9.90997 2.61999 7.89522 0.605469 5.41004 0.605469Z"/>
                    </svg>
                    View the source
                </a>
            </div>
            <main>
                <slot></slot>
            </main>
            <div class="welcome-toast">
                <div class="welcome-toast-content">
                    <div class="welcome-toast-close" onclick="document.querySelector('samples-ui-wrapper').closeWelcomeToast()">
                        <svg width="9" height="8" viewBox="0 0 9 8" xmlns="http://www.w3.org/2000/svg" fill="var(--text-toast)" style="scale: 1.5;">
                            <path d="M5.16753 3.99998L7.01753 2.16248L6.01753 1.17498L4.18003 3.01248L2.34253 1.16248L1.34253 2.16248L3.19253 3.99998L1.35503 5.83748L2.34253 6.82498L4.18003 4.98748L6.01753 6.83748L7.01753 5.83748L5.16753 3.99998Z"/>
                        </svg>
                    </div>
                    <div class="welcome-toast-title">Welcome to RavenDB Sample App</div>
                    <p class="welcome-toast-description">
                        This project demonstrates how to build apps with RavenDB features like document storage, indexing, and real-time subscriptions.
                    </p>
                    <a class="welcome-toast-link" href="https://ravendb.net/cloud" target="_blank">
                        Try it yourself on RavenDB Cloud
                        <svg width="8" height="9" viewBox="0 0 8 9" xmlns="http://www.w3.org/2000/svg" fill="var(--text)" style="scale: 1.5;">
                            <path d="M0.569336 7.26527L5.73282 2.10178H2.96975L2.96959 0.889648H7.79053L7.79037 5.70978L6.57824 5.70963V2.94655L1.41444 8.11035L0.569336 7.26527Z"/>
                        </svg>
                    </a>
                </div>
            </div>
            <div class="footer">
                <div class="resources">
                    <a>
                        Resources
                    </a>
                    <a class="badge-link" href="https://docs.ravendb.net" target="_blank">
                        <svg width="9" height="11" viewBox="0 0 9 11" xmlns="http://www.w3.org/2000/svg" fill="var(--icon-color)">
                            <path d="M5.00369 0.581238H0.372437V10.8375H8.07869V3.65624L5.00369 0.581238ZM4.49744 1.34999L7.30994 4.16249H4.49744V1.34999ZM6.33494 9.01874H2.13494V7.98749H6.35369V9.01874H6.33494ZM6.33494 6.97499H2.13494V5.94374H6.35369V6.97499H6.33494Z"/>
                        </svg>
                        Docs
                    </a>
                    <a class="badge-link" href="https://ravendb.net/community" target="_blank">
                        <svg width="11" height="12" viewBox="0 0 11 12" xmlns="http://www.w3.org/2000/svg" fill="var(--icon-color)">
                            <path d="M5.86705 5.9109C6.21097 5.56698 6.60233 5.41281 7.0767 5.41281C7.55106 5.41281 7.978 5.56698 8.28634 5.9109C8.63025 6.25482 8.78443 6.64617 8.78443 7.12054C8.78443 7.59491 8.63025 8.02184 8.28634 8.33018C7.94242 8.6741 7.55106 8.82827 7.0767 8.82827C6.60233 8.82827 6.17539 8.6741 5.86705 8.33018C5.52314 7.98626 5.36897 7.59491 5.36897 7.12054C5.36897 6.64617 5.52314 6.2311 5.86705 5.9109ZM10.504 11.8168H3.64938V11.2357C3.64938 10.8681 3.86284 10.5479 4.27792 10.2632C4.70485 9.97861 5.17922 9.76515 5.67731 9.65842C6.21097 9.52796 6.64976 9.46867 7.0767 9.46867C7.50363 9.46867 7.94242 9.5161 8.47608 9.65842C9.00975 9.80073 9.48412 10.0023 9.87547 10.2632C10.3024 10.5479 10.504 10.8681 10.504 11.2357V11.8168Z"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M5.45745 0.58313C6.70205 0.58313 7.82606 1.09946 8.62822 1.93091L8.63011 1.9327C9.46036 2.72083 9.97806 3.83503 9.97806 5.07016C9.97806 5.09862 9.97779 5.12703 9.97731 5.15116C9.97781 5.17836 9.97806 5.20562 9.97806 5.23293C9.97806 5.78882 9.8732 6.32021 9.68199 6.80858C9.62351 6.2671 9.40849 5.77969 9.02175 5.35758C9.02562 5.28943 9.02818 5.22075 9.02939 5.15155L9.02933 5.147C9.02372 4.8279 8.98866 4.51598 8.93236 4.24656H7.39189C7.40268 4.33674 7.41198 4.42738 7.41977 4.5186C7.3055 4.50517 7.19082 4.49875 7.07669 4.49875C6.88318 4.49875 6.69584 4.517 6.51513 4.55413C6.50604 4.44684 6.49503 4.34364 6.48236 4.24656H4.2936L4.29798 4.20503C4.25817 4.51332 4.23527 4.8269 4.23016 5.15155L4.23023 5.1574C4.23458 5.47545 4.25683 5.78918 4.29174 6.05653H4.66612C4.52071 6.39272 4.4549 6.75424 4.4549 7.12054C4.4549 7.77819 4.66573 8.36455 5.11178 8.8616C4.65217 9.00156 4.22138 9.21016 3.83051 9.4635C3.18589 9.23268 2.61053 8.85571 2.14403 8.37217L2.14218 8.37043C1.31298 7.5824 0.796021 6.46891 0.796021 5.23467C0.796021 5.20561 0.796302 5.1766 0.79681 5.15195C0.796303 5.12475 0.796053 5.09748 0.796053 5.07016C0.796053 3.83505 1.31376 2.72083 2.1459 1.93092L2.14716 1.92961C2.94806 1.09947 4.07207 0.583141 5.31667 0.583141C5.34123 0.583141 5.36574 0.583335 5.38658 0.58369C5.41016 0.58332 5.43378 0.58313 5.45745 0.58313ZM7.1765 3.32105H8.51066L8.51252 3.31918L8.50378 3.3021C8.091 2.56149 7.4061 1.99328 6.56055 1.72619C6.82535 2.20897 7.031 2.72992 7.1765 3.32105ZM6.23591 3.26984C6.03456 2.62216 5.74124 2.015 5.38706 1.48868L5.40289 1.46362C5.03287 2.015 4.73955 2.62216 4.52499 3.31918H6.24913L6.23591 3.26984ZM1.74478 5.1561C1.75039 5.47519 1.78544 5.78711 1.84175 6.05653H3.37289C3.33831 5.76759 3.31902 5.47378 3.31585 5.17207V5.13102L3.31589 5.12663C3.31917 4.81561 3.34008 4.50882 3.37369 4.24656H1.84175L1.84735 4.21384C1.78544 4.51597 1.75039 4.8279 1.74471 5.15155L1.74478 5.1561ZM2.26443 6.98951L2.27035 7.00121C2.68011 7.74329 3.36246 8.31382 4.20609 8.58436C3.94129 8.10158 3.73565 7.58064 3.59015 6.98951H2.26443ZM2.26159 3.32665H3.59015L3.5976 3.31918L3.60717 3.27422C3.74722 2.7169 3.95902 2.18807 4.21524 1.73126L4.19145 1.73776C3.36864 1.99857 2.68304 2.56771 2.26159 3.32665Z"/>
                        </svg>
                        Community
                    </a>
                    <a class="badge-link" href="https://demo.ravendb.net" target="_blank">
                        <svg width="13" height="9" viewBox="0 0 13 9" xmlns="http://www.w3.org/2000/svg" fill="var(--icon-color)">
                            <path d="M12.3336 3.12459V2.875L6.648 0.133545L0.966431 2.87094V3.12662L6.648 5.86401L12.3336 3.12459Z"/>
                            <path d="M2.93518 6.21052L6.36193 7.8562H6.93812L10.3547 6.21456C10.3547 6.21456 10.3608 6.20039 10.3649 6.1923V4.57495L6.65002 6.36031L2.93518 4.57495V6.21052Z"/>
                            <path d="M11.7344 7.07485V3.89526L11.2804 4.12209V7.07485L10.986 7.96594L11.4318 8.55933H11.5831L12.0289 7.96594L11.7344 7.07485Z"/>
                        </svg>
                        Tutorials
                    </a>
                </div>
                <div class="powered-by">
                    <div>
                        Powered by <a href="https://ravendb.net" class="ravendb-link" target="_blank">RavenDB</a>
                    </div>
                    <div class="toggle-resources">
                        <div onclick="document.querySelector('samples-ui-wrapper').hideResources()" class="hide-resources">
                            Hide
                            <svg width="9" height="6" viewBox="0 0 9 6" xmlns="http://www.w3.org/2000/svg" fill="#7F7D99" style="scale: 1.5;">
                                <path d="M8.63049 1.61304L4.64905 5.60815L0.669556 1.62866L1.49084 0.807373L4.651 3.9519L7.8092 0.791748L8.63049 1.61304Z"/>
                            </svg>
                        </div>
                        <div onclick="document.querySelector('samples-ui-wrapper').showResources()" class="show-resources">
                            Show
                            <svg width="9" height="6" viewBox="0 0 9 6" xmlns="http://www.w3.org/2000/svg" fill="#7F7D99" style="scale: 1.5;">
                                <path d="M0.669556 4.78687L4.651 0.791748L8.63049 4.77124L7.8092 5.59253L4.64905 2.448L1.49084 5.60815L0.669556 4.78687Z"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        `;

        this.shadowRoot.appendChild(stylesElement);
        this.shadowRoot.appendChild(wrapperElement);
    }

    connectedCallback() {
        this.validateAttributes();

        this.setTheme(this.getAttribute("theme"));
        this.shadowRoot.querySelector(".source-link").href = this.getAttribute("sourceLink");
    }

    validateAttributes() {
        const requiredAttributes = ["sourceLink"];

        for (const attribute of requiredAttributes) {
            const value = this.getAttribute(attribute);

            if (value == null) {
                console.error(`Attribute '${attribute}' is required`);
            }
        }
    }

    hideResources() {
        this.shadowRoot.querySelector(".resources").style.display = "none";
        this.shadowRoot.querySelector(".show-resources").style.display = "flex";
        this.shadowRoot.querySelector(".hide-resources").style.display = "none";
    }

    showResources() {
        this.shadowRoot.querySelector(".resources").style.display = "flex";
        this.shadowRoot.querySelector(".show-resources").style.display = "none";
        this.shadowRoot.querySelector(".hide-resources").style.display = "flex";
    }

    closeWelcomeToast() {
        this.shadowRoot.querySelector(".welcome-toast").style.display = "none";
    }

    setTheme(theme) {
        const wrapper = this.shadowRoot.querySelector(".samples-ui-wrapper");
        wrapper.classList.remove("light", "dark");
        wrapper.classList.add(theme == null ? "light" : theme);
    }
}

customElements.define("samples-ui-wrapper", SamplesUIWrapper);
