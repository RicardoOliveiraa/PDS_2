import React, { useState, useContext } from 'react'
import * as ROUTES from '../constants/routes'
import logo from '../logo.svg'
import { Header } from '../components'
import { Profiles } from '../components'
import { Container, Title, List, Item, Picture, Name, Manage } from '../components/profiles/styles/profiles';
import axios from 'axios'

//Name, seen_movies, liked_categorys
export function ManageProfile({ user, setProfile }) {
    console.log("nao é que passamos pra ca?", setProfile)
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
        </Profiles.List>
    )
    return <Profiles.List>
        <Header bg={false}>
            <Header.Frame>
                <Header.Logo to={ROUTES.HOME} src={logo} alt="Disneyflix" />
            </Header.Frame>
        </Header>
        <Profiles>
            <Profiles.Title>Quem está assistindo?</Profiles.Title>
            {profiles}
            <Profiles.Manage>Add Cpx na DisneyLand</Profiles.Manage>
        </Profiles>
    </Profiles.List>
}