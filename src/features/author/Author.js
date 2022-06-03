import { ThemeProvider } from "styled-components";
import Container from "../../common/Container";
import Header from "../../common/Header";
import { theme } from "../tasks/TasksPage";


function Author() {

    return (
        <ThemeProvider theme={theme}>
            <Header title="O autorze" />
            <Container
                title="Jakub Szczechowicz"
                body={
                    <>
                        <article>
                            <h3>Summary</h3>
                            <p>
                                Creative and responsible software tester with
                                two years of experience, familiar with Python
                                on a professional and hobby basis, always
                                hungry for knowledge, team player. Fluently
                                communicating in English.
                            </p>
                        </article>
                        <article>
                            <h3>Hobbies</h3>
                            <p>
                                If there's one word that defines me, it's gotta be <strong>Music</strong>.
                                I'm a vocalist, music producer, guitarist and recently even a drummer in various bands of <em>Lower
                                    Silesia</em>.
                                I also try to do my best when it comes to mixing stuff on my own, but there's still a bumpy road
                                ahead🤫.
                            </p>
                        </article>
                    </>
                }
            />
        </ThemeProvider>
    );
}

export default Author;
