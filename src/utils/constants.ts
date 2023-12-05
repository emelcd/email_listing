export const SHEET_ID = "1N9J0q-suUPzdGWdBobSroU9-OsDpyiwO5Cp65LEwdog"
export const SPREADSHEET = SpreadsheetApp.openById(SHEET_ID)!
export const SHEET_NAMES = SPREADSHEET.getSheetByName('Usernames')!
export const SHEET_VIDEOS = SPREADSHEET.getSheetByName('Videos')!
export const SHEET_LOGGER = SPREADSHEET.getSheetByName('Logger')!

export const TEMPLATE_EMAIL_HTML = `
<html>
  <body style="font-family: 'Courier New', Courier, monospace">
    <table
      style="border: 1px solid gray; width: 600px; border-collapse: collapse"
    >
      <tr>
        <th
          align="center"
          style="border: 1px solid gray; background: whitesmoke; padding: 10px"
        >
          <h1>Ey, <span style="color: #ff0000">{{username}}</span>!</h1>
        </th>
      </tr>
      <tr>
        <th style="border: 1px solid gray; padding: 10px; text-align: center">
          <div style="background-color: #f2f2f2">
            <a
              href="https://www.youtube.com/watch?v={{videoID}}"
              target="_blank"
            >
              <img
                src="https://img.youtube.com/vi/{{videoID}}/0.jpg"
                alt="video"
              />
            </a>
          </div>
        </th>
      </tr>
      <tr>
        <td style="padding: 10px">
          <p>{{videoDescription}}</p>
          <hr />
          <p>
            <strong>Disclaimer:</strong> This is an automated email. Please do
            not reply to this email. 
            <hr>
            <code>
              If you want to know how this script is
              built check the <a href="https://github.com/emelcd/mailing_list_apps_script">source code</a>.
            </code>
          </p>
        </td>
      </tr>
    </table>
  </body>
</html>


`
