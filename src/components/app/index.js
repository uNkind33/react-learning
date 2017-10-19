import React from 'react';
import router from '../../routes';

import ArticleList from '../articleList/index';
import { articles } from '../../fixtures';

const App = () => (
    <div>
        <ArticleList articles={articles} />
    </div>
);

export default App;

