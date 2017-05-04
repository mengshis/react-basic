'use strict'

import 'semantic-ui/semantic.min.css!';

import React from 'react';
import ReactDom from 'react-dom';
import CommentBox from './comment/commentBox';



ReactDom.render(
    <CommentBox url='app/comment.json'/>,
    document.getElementById('app')
)
