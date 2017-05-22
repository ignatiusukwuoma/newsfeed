import React from 'react';
import errorIcon from '../../public/images/error-icon.png';

/**
 * Component to display when there is an error
 * @class Error
 * @extends {React.Component}
 */
export default class Error extends React.Component {

  /**
   * @returns {View} the error page
   * @memberOf Error
   */
  render() {
    return (
      <div class="container-fluid">
        <div class="error-message">
          <img src={errorIcon} />
          <p class="text-center">
            There was an error with processing your request.
            Please <a href="/">refresh</a> the page!
          </p>
        </div>
      </div>
    );
  }
}
