import React from "react";

import { FILTRATION_PANEL_CONSTANTS, FILTRATION_PANEL_VALUES } from "common/constants";
import "./FiltrationPanel.scss";

const FiltrationPanel = (props) => {
  const { handleVisibilityFilter, filter } = props;

  return (
    <div className="filtration-panel-component">
      <p className="price">{FILTRATION_PANEL_CONSTANTS.PRICE}</p>
      <div className="range-to-sort">
        <div className="range-from">
          <p>{FILTRATION_PANEL_CONSTANTS.FROM}</p>
          <input name={FILTRATION_PANEL_VALUES.LOWER_PRICE_LIMIT} type="number" min="0" />
        </div>
        <div className="range-to">
          <p>{FILTRATION_PANEL_CONSTANTS.TO}</p>
          <input name={FILTRATION_PANEL_VALUES.UPPER_PRICE_LIMIT} type="number" min="0" />
        </div>
      </div>
      <p className="currency">{FILTRATION_PANEL_CONSTANTS.CURRENCY}</p>
      <div className="currency-buttons">
        <div className={`usd-currency-button`}>{FILTRATION_PANEL_CONSTANTS.USD}</div>
        <div className={`uah-currency-button`}>{FILTRATION_PANEL_CONSTANTS.UAH}</div>
      </div>
      <p className="sorting">{FILTRATION_PANEL_CONSTANTS.SORTING}</p>
      <div className="sorting-option">
        <label className="radio-button">
          <input
            type="radio"
            value={FILTRATION_PANEL_VALUES.ASCENDING}
            checked={filter === FILTRATION_PANEL_VALUES.ASCENDING}
            onChange={handleVisibilityFilter}
          />
          <span className="checkmark"></span>
        </label>
        <p>{FILTRATION_PANEL_CONSTANTS.ASCENDING}</p>
      </div>
      <div className="sorting-option">
        <label className="radio-button">
          <input
            type="radio"
            value={FILTRATION_PANEL_VALUES.DESCENDING}
            checked={filter === FILTRATION_PANEL_VALUES.DESCENDING}
            onChange={handleVisibilityFilter}
          />
          <span className="checkmark"></span>
        </label>
        <p>{FILTRATION_PANEL_CONSTANTS.DESCENDING}</p>
      </div>
      <div className="sorting-option">
        <label className="radio-button">
          <input
            type="radio"
            value={FILTRATION_PANEL_VALUES.ALPHABETICAL}
            checked={filter === FILTRATION_PANEL_VALUES.ALPHABETICAL}
            onChange={handleVisibilityFilter}
          />
          <span className="checkmark"></span>
        </label>
        <p>{FILTRATION_PANEL_CONSTANTS.ALPHABETICAL}</p>
      </div>
    </div>
  );
};

export default FiltrationPanel;
