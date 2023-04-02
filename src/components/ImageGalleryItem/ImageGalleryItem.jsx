import { Component } from 'react';
import { Card, Image } from './Image.styled';
import Modal from 'components/Modal/Modal';

export default class ImageGalleryItem extends Component {
  state = {
    isOpen: false,
  };

  openModal = () => this.setState({ isOpen: true });
  closeModal = () => this.setState({ isOpen: false });

  render() {
    const { webformatURL, tags, largeImageURL } = this.props.image;
    return (
      <Card>
        <Image onClick={this.openModal} src={webformatURL} alt={tags} />
        {this.state.isOpen && (
          <Modal onClose={this.closeModal}>
            <img src={largeImageURL} alt={tags} />
          </Modal>
        )}
      </Card>
    );
  }
}
