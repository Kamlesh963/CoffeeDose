// TabsComponent.js
import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate  } from 'react-router-dom';
import '../CSS/HomeTab.css';

const ConditionalWrapper = ({ initialWrapper, condition, wrapper, children }) =>
  condition ? wrapper(children) : initialWrapper(children);

const HomeTab = ({ activeTab, tabsList, isFancyTabs = true, isVertical, isRightToLeftLanguage }) => {
  const navigate = useNavigate(),
    [isUrlTabs, setIsUrlTabs] = useState(false),
    [currentActiveTab, setCurrentActiveTab] = useState(),
    [previousActiveTab, setPreviousActiveTab] = useState(0),
    animationClassName = useMemo(() => {
      if (currentActiveTab !== undefined) {
        const getAnimationClassName = () => {
          if (currentActiveTab !== undefined) {
            if (isVertical) {
              if (currentActiveTab < previousActiveTab) {
                return 'bottom-to-top-animation';
              } else {
                return 'top-to-bottom-animation';
              }
            } else {
              if (isRightToLeftLanguage) {
                if (currentActiveTab < previousActiveTab) {
                  return 'left-to-right-animation';
                } else {
                  return 'right-to-left-animation';
                }
              } else {
                if (currentActiveTab < previousActiveTab) {
                  return 'right-to-left-animation';
                } else {
                  return 'left-to-right-animation';
                }
              }
            }
          }
        };
        
        const animationClassName = getAnimationClassName();
        
      }
    }, [isVertical, isRightToLeftLanguage, currentActiveTab, previousActiveTab]);

  useEffect(() => {
    if (tabsList.find((el) => el.tabUrl)) {
      setIsUrlTabs(true);
    } else {
      if (activeTab !== 0 && activeTab && activeTab < tabsList.length) {
        setCurrentActiveTab(activeTab);
      } else {
        setCurrentActiveTab(0);
      }
    }
  }, [activeTab, tabsList]);

  useEffect(() => {
    if (isUrlTabs) {
      const currentActiveTabUrlIndex = tabsList.findIndex((el) => el.tabUrl === window.location.pathname);
      setCurrentActiveTab(currentActiveTabUrlIndex !== -1 ? currentActiveTabUrlIndex : 0);
      setPreviousActiveTab(currentActiveTab !== null && currentActiveTab !== undefined ? currentActiveTab : 0);
    }
  }, [isUrlTabs, tabsList, currentActiveTab]);

  const onChangeTab = (index, tabUrl) => {
    if (tabUrl) navigate(tabUrl);
    else {
      setPreviousActiveTab(currentActiveTab !== null && currentActiveTab !== undefined ? currentActiveTab : 0);
      setCurrentActiveTab(index);
    }
  };

  return (
    <div className={`tabs ${isVertical ? 'vertical-tabs' : ''}`}>
      <div className={`${isFancyTabs ? 'fancy-labels-wrapper' : 'labels-wrapper'}`}>
        <ConditionalWrapper
          initialWrapper={(children) => <React.Fragment>{children}</React.Fragment>}
          wrapper={(children) => <div className="labels mx-auto">{children}</div>}
          condition={isFancyTabs}
        >
          {tabsList.map((el, i) => (
            <div
              className={`tab-label ${currentActiveTab === i ? ' active-tab-label' : ''}`}
              key={i}
              onClick={() => {
                onChangeTab(i, el.tabUrl);
              }}
            >
              {el.label}
            </div>
          ))}
        </ConditionalWrapper>
      </div>
      <div className="tabs-content-wrapper" style={{ borderRadius: isFancyTabs ? 10 : 0 }}>
        {tabsList.map((el, i) => (
          <div
            className={`tab-content ${currentActiveTab === i ? ' active-tab-content' : ''
              } ${animationClassName}`}
            key={i}
          >
            {currentActiveTab === i && <img src={el.content} alt="" className='img-fluid' /> }
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeTab;
