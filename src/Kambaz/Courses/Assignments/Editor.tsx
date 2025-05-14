export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">
        <label htmlFor="wd-name">Assignment Name</label>
        <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
        <textarea id="wd-description">
          The assignment is available online Submit a link to the landing page of
        </textarea>
        <br />
        <table>
          <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Points</label>
          </td>
          <td>
            <input id="wd-points" value={100} />
          </td>
        </tr>
        <tr>
            <td align="right" valign="top">
                <label htmlFor="wd-group">Assignment Group</label>
            </td>
            <td>
                <select id="wd-group">
                    <option>ASSIGNMENTS</option>
                </select>
            </td>
        </tr>

        <tr>
            <td align="right" valign="top">
                <label htmlFor="wd-display-grade-as">Display Grade As</label>
            </td>
            <td>
                <select id="wd-display-grade-as">
                <option>Percentage</option>
                </select>
            </td>
        </tr>

        <tr>
            <td align="right" valign="top">
                <label htmlFor="wd-submission-type">Submission Type</label>
            </td>
            <td>
                <select id="wd-submission-type">
                    <option>Online</option>
                </select>
                <br />
                <br />
                <input type="checkbox" id="wd-text-entry" />
                <label htmlFor="wd-text-entry">Text Entry</label>
                <br />
                <input type="checkbox" id="wd-website-url" />
                <label htmlFor="wd-website-url">Website URL</label>
                <br />
                <input type="checkbox" id="wd-file-upload" />
                <label htmlFor="wd-file-upload">File Upload</label>
                <br />
                <input type="checkbox" id="wd-media-recording" />
                <label htmlFor="wd-media-recording">Media Recording</label>
                <br />
                <input type="checkbox" id="wd-student-annotation" />
                <label htmlFor="wd-student-annotation">Student Annotation</label>
                <br />
                <input type="checkbox" id="wd-file-upload" />
                <label htmlFor="wd-file-upload">File Upload</label>
                <br />
                <br />
                
            </td>
        </tr>
        <tr>
            <td align="right" valign="top">
                <label htmlFor="wd-assign-to">Assign To</label>
            </td>
            <td>
                <input id="wd-assign-to"></input>
                <br />
            </td>
        </tr>

        <tr>
            <td align="right" valign="top">
                <label htmlFor="wd-due-date">Due</label>
            </td>
            <td>
                <input type="date" id="wd-due-date"></input>
                <br />
            </td>
        </tr>

        <tr>
            <td align="right" valign="top">
                <label htmlFor="wd-available-form">Available From</label>
            </td>
            <td>
                <input type="date" id="wd-available-from"></input>
            </td>
        </tr>

        <tr>
            <td align="right" valign="top">
                <label htmlFor="wd-available-untill">Untill</label>
            </td>
        
            <td>
                <input type="date" id="wd-available-untill"></input>
            </td>
        </tr>
      </table>
    </div>
);}
  