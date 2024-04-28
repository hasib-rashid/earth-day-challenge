import { Container, Group } from '@mantine/core';
import classes from './Footer.module.css';

export function FooterSocial() {
    return (
        <div className={classes.footer}>
            <Container className={classes.inner}>
                <h1>Hello</h1>
                <Group gap={0} className={classes.links} justify="flex-end" wrap="nowrap">
                    <h1>Difference</h1>
                </Group>
            </Container>
        </div>
    );
}