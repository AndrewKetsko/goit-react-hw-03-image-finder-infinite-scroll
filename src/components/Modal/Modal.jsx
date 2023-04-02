import { Component } from 'react';
import { Overlay, BigPic } from './Modal.styled';
import { createPortal } from 'react-dom';

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.keyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.keyDown);
  }

  keyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <Overlay onClick={this.props.onClose}>
        <BigPic>
          {this.props.children}
        </BigPic>
      </Overlay>,
      document.querySelector('#modal')
    );
  }
}
