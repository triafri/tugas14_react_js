import React from 'react';
import { Grid, Feed, List, Icon, Container } from 'semantic-ui-react';


function Bottom() {
    return (
             <>
             <Container>
                <Grid style={{ marginTop: '20px' }}>
                    <Grid.Column floated='left' width={5}>
                        <Feed>
                            <Feed.Event>
                                <Feed.Label>
                                    <img src='https://react.semantic-ui.com/images/avatar/small/elliot.jpg' />
                                </Feed.Label>
                                <Feed.Content>
                                    <Feed.Summary>
                                        <Feed.User>Anton</Feed.User> added you as a friend
                                        <Feed.Date>3 Hour Ago</Feed.Date>
                                    </Feed.Summary>
                                    <Feed.Meta>
                                        <Feed.Like>
                                            <Icon name='like' />4 Likes
                                        </Feed.Like>
                                    </Feed.Meta>
                                </Feed.Content>
                            </Feed.Event>

                            <Feed.Event>
                                <Feed.Label>
                                    <Icon pencil alternate />
                                </Feed.Label>
                                <Feed.Content>
                                    <Feed.Summary>
                                        You submitted a new post to the page
                                        <Feed.Date>3 days ago</Feed.Date>
                                    </Feed.Summary>
                                    <Feed.Extra images>
                                        Saya senang Belajar Bahasa Pemrograman
                                    </Feed.Extra>
                                    <Feed.Meta>
                                        <Feed.Like>
                                            <Icon name='like' />11 Like
                                        </Feed.Like>
                                    </Feed.Meta>
                                </Feed.Content>
                            </Feed.Event>

                            <Feed.Event>
                                <Feed.Label image='https://react.semantic-ui.com/images/avatar/small/helen.jpg' />
                                <Feed.Content>
                                    <Feed.Date>4 days ago</Feed.Date>
                                    <Feed.Summary>
                                        David added 2 new Image
                                    </Feed.Summary>
                                    <Feed.Extra images>
                                        <a>
                                            <img src='https://s3-ap-southeast-1.amazonaws.com/niomic/img-v1/c_login_logo.png' />
                                        </a>
                                        <a>
                                            <img src='https://cdn-images-1.medium.com/max/1600/1*6kK9j74vyOmXYm1gN6ARhQ.png' />
                                        </a>
                                    </Feed.Extra>
                                    <Feed.Meta>
                                        <Feed.Like>
                                            <Icon name='like' />
                                            2 Likes
                                        </Feed.Like>
                                    </Feed.Meta>
                                </Feed.Content>
                            </Feed.Event>
                        </Feed>
                    </Grid.Column>
                    <Grid.Column floated='right' width={3}>
                        <h3>Website Terkait</h3>
                        <List>
                            <List.Item>
                                <List.Icon name='linkify' />
                                <List.Content>
                                    <a href='https://www.google.com/' target="_blank" rel="noopener noreferrer">Google</a>
                                </List.Content>
                            </List.Item>
                            <List.Item>
                                <List.Icon name='linkify' />
                                <List.Content>
                                    <a href='https://www.facebook.com/' target="_blank" rel="noopener noreferrer">Facebook</a>
                                </List.Content>
                            </List.Item>
                            <List.Item>
                                <List.Icon name='linkify' />
                                <List.Content>
                                    <a href='https://react.semantic-ui.com/' target="_blank" rel="noopener noreferrer">Semantic UI</a>
                                </List.Content>
                            </List.Item>
                            <List.Item>
                                <List.Icon name='linkify' />
                                <List.Content>
                                    <a href='https://niomic.com/'>NIOMIC</a>
                                </List.Content>
                            </List.Item>
                            <List.Item>
                                <List.Icon name='linkify' />
                                <List.Content>
                                    <a href='https://reactjs.org/' target="_blank" rel="noopener noreferrer">React</a>
                                </List.Content>
                            </List.Item>
                        </List>
                    </Grid.Column>
                </Grid>
                </Container>
            </>
            
    )
}

export default Bottom;