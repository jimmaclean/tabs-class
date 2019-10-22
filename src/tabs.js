module.exports = class Tabs {

    constructor(container, name) {  
        this.model = {};
        const generateGroupId = () => 'tabs-' + Math.random().toString(36).substr(2, 16);
        const formatPanelId = (id, name) => `${id}-panel-${name}`;

        let id = ( name ? formatId(name) : generateGroupId() );
        container.setAttribute('id', id);
      
        let buttons = document.querySelectorAll(`#${id} [data-tab-btn]`);
        buttons.item(0).parentNode.setAttribute('role', 'tablist');

        for(let i = 0; i< buttons.length; i++) {
            let button = buttons.item(i);
            let tabName = button.getAttribute('data-tab-btn');

            let panelId = formatPanelId( id, tabName );
            let panel = document.querySelector(`#${id} [data-tab-box="${tabName}"]`);
            
            let active = (button.getAttribute('data-tab-active') === "true");

            button.setAttribute('role', 'tab');
            button.setAttribute('aria-controls', panelId);

            panel.setAttribute('role', 'tabpanel');
            panel.setAttribute('id', panelId);

            this.model[tabName] = {              
                button: button,
                panel: panel,
                active: active,
            };
            this.makeButton(button,tabName);
        
        }
    }
    makeButton(button, tabName) {
        let model = this.model;
        button.addEventListener('click', function(event){
              if(model[tabName].active === false) {
                // set(tabName);
                console.log(tabName)
            }
        });
    }

}
