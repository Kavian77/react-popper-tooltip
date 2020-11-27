import * as React from 'react';
import ReactDOM from 'react-dom';
import 'react-popper-tooltip/src/styles.css';
import { usePopperTooltip } from 'react-popper-tooltip';

function App() {
  return <Example />;
}

function Example() {
  const {
    getArrowProps,
    getTooltipProps,
    setArrowRef,
    setTooltipRef,
    setTriggerRef,
    visible,
  } = usePopperTooltip();

  return (
    <div className="App">
      <h1>react-popper-tooltip</h1>
      <p>Using a react portal to render tooltip before closing body tag.</p>

      <button type="button" ref={setTriggerRef}>
        Reference element
      </button>

      {visible &&
        ReactDOM.createPortal(
          <div
            ref={setTooltipRef}
            {...getTooltipProps({ className: 'tooltip-container' })}
          >
            Popper element
            <div
              ref={setArrowRef}
              {...getArrowProps({ className: 'tooltip-arrow' })}
            />
          </div>,
          document.body
        )}
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);