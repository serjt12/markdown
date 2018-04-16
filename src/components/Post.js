import React, { Component } from 'react'
import marked from 'marked'

class Post extends Component {
  state = {
    text: 'Heading\n=======\n\nSub-heading\n-----------\n \n### Another deeper heading\n \nParagraphs are separated\nby a blank line.\n\nLeave 2 spaces at the end of a line to do a  \nline break\n\nText attributes *italic*, **bold**, \n`monospace`, ~~strikethrough~~ .\n\nShopping list:\n\n  * Five\n  * Green\n  * Black\n\nNumbered list:\n\n  1. One\n  2. Two\n  3. Four\n\n\n  *[JAS](https://twitter.com/serjt12)*'
  }

  textInput = (e) => {
    this.setState({
      text: e.target.value
    })
  }

  converter = () => {
    const convText = marked(this.state.text, {
      sanitize: true,
      gfm: true
    })
    return {
      __html: convText
    }
  }

  render () {
    return (
      <div className='container'>
        <section className='text-field' >
          <textarea
            onChange={this.textInput}
            value={this.state.text}
          />
        </section>
        <section className='show-field'>
          <span dangerouslySetInnerHTML={this.converter()} />
        </section>
      </div>
    )
  }
}

export default Post
