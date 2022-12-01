const Tabs = (props) => {
    const { allTabs, currentTabIndex, setCurrentTabIndex } = props;

    const tabStyle = (index) => {
        if(index === currentTabIndex) {
            return "selectedTab"
        } else {
            return "nonSelectedTab";
        }
    }

    const setSelectedTab = (index) => {
        setCurrentTabIndex(index);
    }

    return (
        <div>
        {
            allTabs.map((item, index) => (
            <div className={`tab ${ tabStyle(index) }`} onClick={(e) => setSelectedTab(index) }>
                { item.label }
            </div>
            ))
        }

        </div>
    );
}

export default Tabs;