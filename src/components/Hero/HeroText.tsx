import { Title, Text, Button, Container } from '@mantine/core';
import { Dots } from './Dots';
import classes from './HeroText.module.css';

export function HeroText() {
    return (
        <Container className={classes.wrapper} size={1400}>
            <Dots className={classes.dots} style={{ left: 0, top: 0 }} />
            <Dots className={classes.dots} style={{ left: 60, top: 0 }} />
            <Dots className={classes.dots} style={{ left: 0, top: 140 }} />
            <Dots className={classes.dots} style={{ right: 0, top: 60 }} />

            <div className={classes.inner}>
                <Title className={classes.title}>
                    Take{' '}
                    <Text component="span" color="red" inherit>
                        Action
                    </Text>{' '}
                    Now
                </Title>

                <Container p={0} size={600}>
                    <Text size="lg" c="dimmed" className={classes.description}>
                        Join our Earth Day quiz to test your knowledge and learn more about what you can do to help our planet!
                    </Text>
                </Container>

                <div className={classes.controls}>
                    <Button className={classes.control} color='green' size="lg">
                        Start the Quiz!
                    </Button>
                </div>
            </div>
        </Container>
    );
}