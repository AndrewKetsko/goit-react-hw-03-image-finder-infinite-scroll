import { Component } from 'react';
import { Button, Form, Input, Label, Search } from './Searchbar.styled';
import { BsSearch } from 'react-icons/bs';
import { toast } from 'react-toastify';

export default class Searchbar extends Component {
  
  submitForm = e => {
    e.preventDefault();
    if (!e.target.search.value.trim()) {
      toast('Enter some word to search');
      return;
    }
    if (this.props.search === e.target.search.value.trim().split(' ').join('+')) {
      toast('Enter new search please');
      return;
    }
    this.props.setSearch(e.target.search.value.trim().split(' ').join('+'));
  };

  render() {
    return (
      <Search>
        <Form onSubmit={this.submitForm}>
          <Button type="submit">
            <BsSearch></BsSearch>
            <Label>Search</Label>
          </Button>

          <Input
            name="search"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </Form>
      </Search>
    );
  }
}
