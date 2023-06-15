import React from 'react'; //optional

function handleSubmit(event) {
  event.preventDefault(); // Prevents the default form submission behavior
  console.log("Form submitted");
}

function TweetForm(){
  const placeholderText = "What are you humming about?";

  return (
    <section className="newtweet">
        <form method="post" action="/tweets" className="newtweet__form" onSubmit={handleSubmit}>
          <textarea className="form__textarea" name="text" placeholder={placeholderText}></textarea>
          <input type="submit" value="Tweet" className="form__input" />
          <span className="form__counter">140</span>
        </form>
      </section>
  );
}

export default TweetForm;