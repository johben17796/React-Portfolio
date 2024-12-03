export default function ContactPage () {
    return (
        <div>
        <form class="center">
            <ul><label>Name:</label></ul>
            <ul><input type="text" /> </ul>
            
            <ul><label>Email:</label></ul>
            <ul><input type="text" /> </ul>
            <ul><label>Message:</label></ul>
            <ul><input type="text" /> </ul>
            <ul><input type="submit" name="submit" /> </ul>
        </form>
        </div>
    );
}