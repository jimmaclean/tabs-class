console.clear();   

var tabs = function(){
  var tabsModel = {};
  var generateGroupId = () => 'tabs-' + Math.random().toString(36).substr(2, 16);
  var formatPanelId = (id, name) => `${id}-panel-${name}`;
  var formatTabName = (name) => 'tab-' + name;

  
  function init(container, name) {
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

            tabsModel[tabName] = {              
                button: button,
                panel: panel,
                active: active,
            };
        
            button.addEventListener('click', function(event){
                if(tabsModel[tabName].active === false) {
                set(tabName);
            }
        });
        }
  }

  function kill() {
    console.log("kill");
  }
  function element() {
    console.log("element");
  }
  function set(tabName) {
   
      let keys = Object.keys(tabsModel);    
      keys.splice(keys.indexOf(tabName), 1);
      
      for (let i = 0; i < keys.length; i++) {
        tabsModel[keys[i]].active = false;        
      }     
      tabsModel[tabName].active = true;
      render();  
    console.log(tabsModel);
  }
    
  function render(){
      for (var tab in tabsModel) {
        let button = tabsModel[tab].button;
        let panel = tabsModel[tab].panel;
        if (tabsModel[tab].active === true) {
          // tabGroupModel[tab].button.classList.add('is-active');
          // tabGroupModel[tab].box.classList.add('is-active');
          button.setAttribute('data-tab-active', true);
          button.setAttribute('aria-selected', true);

          panel.setAttribute('data-tab-active', true);
          panel.setAttribute('aria-hidden', false);


        } else {
          // tabGroupModel[tab].button.classList.remove('is-active');
          // tabGroupModel[tab].box.classList.remove('is-active');
          button.setAttribute('data-tab-active', false);
          button.setAttribute('aria-selected', false);

          panel.setAttribute('data-tab-active', false);
          panel.setAttribute('aria-hidden', true);
        }
      }
      
   }
    
   return {
      init: init,
      set: set,
      kill: kill,
      element: element,
    }    
};




// var tabsEl = document.querySelector('[data-tabs]');
var tabsElAll = document.querySelectorAll('[data-tabs]');

var mytabs = new tabs();
var mytabs2 = new tabs();

// mytabs.init(tabsEl);
// mytabs.set('02');

var allTabs = {
  tab1: mytabs.init(tabsElAll.item(0)),
  tab2: mytabs2.init(tabsElAll.item(1)),
};
// for(var t=0;t<tabsElAll.length;t++) {
//   let name = `alltabs-${t}`;
//   let tempObj = {};
//   let tab = mytabs.init(tabsElAll.item(t));
//   console.log(tab);
//   tempObj[name] = tab;
//   Object.assign(allTabs, tempObj );
// }
// console.log(allTabs);