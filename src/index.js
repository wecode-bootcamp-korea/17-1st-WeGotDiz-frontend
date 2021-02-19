import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes';

//MainPage branch slick scss Add
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './Style/common.scss';
import './Style/reset.scss';

ReactDOM.render(<Routes />, document.getElementById('root'));
