import React from 'react';

function Tab ({ activeTab, label, click}) {
    function changeTab (e) {
        click(label);
    }

    let active = 'tab-list-item';

    if (activeTab === label) {
        active += ' tab-list-active';
    }
    
    return <li className={active} onClick={changeTab}>{label}</li>;
}

export default Tab;