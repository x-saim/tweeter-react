import React from 'react'; //optional
import Tweet from './Tweet.js'

function TweetList() {

  return (
    <section className="tweets">
      <Tweet></Tweet>
      <Tweet></Tweet>
    </section>
  );
}

export default TweetList;