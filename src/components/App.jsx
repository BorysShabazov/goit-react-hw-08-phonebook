import { Section } from './Section/Section';
import { PhoneBook } from './PhoneBook/PhoneBook';
import { Contacts } from './Contacts/Contacts';
import { Filter } from './Filter/Filter';

const App = () => {
  return (
    <div className="app">
      <Section title="Phonebook">
        <PhoneBook />
      </Section>

      <Section title="Contacts">
        <Contacts>
          <Filter />
        </Contacts>
      </Section>
    </div>
  );
};

export default App;
