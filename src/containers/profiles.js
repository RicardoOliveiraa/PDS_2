import React, { useState, useContext } from 'react'
import * as ROUTES from '../constants/routes'
import logo from '../logo.svg'
import { Header } from '../components'
import { Profiles } from '../components'
import { Container, Title, List, Item, Picture, Name, Manage, Delete } from '../components/profiles/styles/profiles';
import { Form } from '../components';
import axios from 'axios'



//Name, seen_movies, liked_categorys
export function SelectProfileContainer({ user, setProfile }) {
    const [shouldManageProfile, setShouldManageProfile] = useState(false)
    const [firstName, setFirstName] = useState('');
    const [newUserName, setNewUserName] = useState('');
    const isInvalid = firstName === '';
    const handleNewuser = (event) => {
        const user = {
            name: firstName,
        };
    }

    const profiles = user.profile_users.map((user) =>
        <Profiles.List>
            <Profiles.User
                onClick={
                    () =>
                        setProfile(
                            {
                                displayName: user.name,
                                photoURL: user.picture,
                            }
                        )
                }
                data-testid="user-profile"
            >
                <Profiles.Picture src={user.picture} />
                <Profiles.Name> {user.name} </Profiles.Name>
            </Profiles.User>
            {
                shouldManageProfile && <Profiles.Delete />
            }

        </Profiles.List>
    )


    return (
        <>
            <Profiles.List>
                <Header bg={false}>
                    <Header.Frame>
                        <Header.Logo to={ROUTES.HOME} src={logo} alt="Disneyflix" />
                    </Header.Frame>
                </Header>
                <Profiles>
                    <Profiles.Title>Quem está assistindo?</Profiles.Title>

                    {profiles}
                    <Profiles.Manage
                        onClick={
                            () => {
                                setShouldManageProfile(!shouldManageProfile)
                                console.log("aqui essa porra!", shouldManageProfile)
                            }
                        }
                    > Gerenciar Passageiros na DisneyLand</Profiles.Manage>
                    <div>
                        {
                            shouldManageProfile
                            && <Form>
                                <Form.Input
                                    type="text"
                                    placeholder="Nome"
                                    value={newUserName}
                                    onChange={({ target }) => setNewUserName(target.value)}
                                />
                                <Form.Submit disabled={isInvalid} type="submit" data-testid="sign-up">
                                    Adicionar
									</Form.Submit>
                            </Form>
                        }
                    </div>
                </Profiles>
            </Profiles.List>
        </>
    )
}