import React from 'react';
import { merge } from 'lodash';


class ReviewForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          rating: 1,
          overall: 1,
          food: 1,
          service: 1,
          ambience: 1,
          value: 1,
          body: ""

        };


        this.handleSubmit = this.handleSubmit.bind(this);
    }


    update(field) {
      return e => {
        this.setState({[field]: e.target.value});
      };
    }


    handleSubmit(e) {
        e.preventDefault();
        const { currentUser, cafe } = this.props;
        const review = merge({},this.state, {
          user_id: this.props.currentUser.id,
          cafe_id: this.props.cafe.id,
        });
        
      return this.props.createReview(review);
    }


    render() {
      const { currentUser } = this.props;
        return(
            <div className="review-form-container">

                <form onSubmit={this.handleSubmit} className="review-form-box">
                    <section className="review-form-header">

                    </section>
                    <section className="review-form-main">
                        <span>
                            Hi, rate your dining experience
                        </span>

                        <span>
                          <div>
                            Rating
                          </div>
                          <span className="radio-inputs">
                            <select id="review-dropdown" defaultValue="" onChange={this.update("rating")}>
                              <option value={1} key={1}>1</option>
                              <option value={2} key={2}>2</option>
                              <option value={3} key={3}>3</option>
                              <option value={5} key={4}>4</option>
                              <option value={5} key={5}>5</option>
                            </select>
                          </span>
                        </span>

                        <span>
                            <div>
                                Overall
                            </div>
                            <span className="radio-inputs">
                                <select id="review-dropdown" defaultValue="" onChange={this.update("overall")}>
                                  <option value={1} key={1}>1</option>
                                  <option value={2} key={2}>2</option>
                                  <option value={3} key={3}>3</option>
                                  <option value={5} key={4}>4</option>
                                  <option value={5} key={5}>5</option>
                                </select>
                            </span>
                        </span>

                        <span>
                            <div>
                                Food
                            </div>
                            <span className="radio-inputs">
                              <select id="review-dropdown" defaultValue="" onChange={this.update("food")}>
                                <option value={1} key={1}>1</option>
                                <option value={2} key={2}>2</option>
                                <option value={3} key={3}>3</option>
                                <option value={5} key={4}>4</option>
                                <option value={5} key={5}>5</option>
                              </select>
                            </span>
                        </span>

                        <span>
                            <div>
                                Service
                            </div>
                            <span className="radio-inputs">
                              <select id="review-dropdown" defaultValue="" onChange={this.update("service")}>
                                <option value={1} key={1}>1</option>
                                <option value={2} key={2}>2</option>
                                <option value={3} key={3}>3</option>
                                <option value={5} key={4}>4</option>
                                <option value={5} key={5}>5</option>
                              </select>
                            </span>
                        </span>

                        <span>
                            <div>
                                Ambience
                            </div>
                            <span className="radio-inputs"> 
                              <select id="review-dropdown" defaultValue="" onChange={this.update("ambience")}>
                                <option value={1} key={1}>1</option>
                                <option value={2} key={2}>2</option>
                                <option value={3} key={3}>3</option>
                                <option value={5} key={4}>4</option>
                                <option value={5} key={5}>5</option>
                              </select>
                            </span>
                        </span>

                        <span>
                            <div>
                                Value
                            </div>
                            <span className="radio-inputs">
                              <select id="review-dropdown" defaultValue="" onChange={this.update("value")}>
                                <option value={1} key={1}>1</option>
                                <option value={2} key={2}>2</option>
                                <option value={3} key={3}>3</option>
                                <option value={5} key={4}>4</option>
                                <option value={5} key={5}>5</option>
                              </select>
                            </span>
                        </span>

                        <span>
                          <textarea
                            placeholder="please leave a description"
                            value={this.state.body}
                            onChange={this.update("body")}
                          />
                        </span>

                        <button>Submit review</button>

                    </section>
                </form>
            </div>

        )
    }


}

export default ReviewForm;