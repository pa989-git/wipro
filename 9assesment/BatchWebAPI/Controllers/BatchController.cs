using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

[Route("api/[controller]")]
[ApiController]
public class BatchController : ControllerBase
{
    private readonly IBatchRepository _batchRepository;

    public BatchController(IBatchRepository batchRepository)
    {
        _batchRepository = batchRepository;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<Batch>>> GetBatches()
    {
        return Ok(await _batchRepository.GetAllBatches());
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<Batch>> GetBatch(int id)
    {
        var batch = await _batchRepository.GetBatchById(id);
        if (batch == null) return NotFound();
        return Ok(batch);
    }

    [HttpPost]
    public async Task<ActionResult<Batch>> CreateBatch(Batch batch)
    {
        var newBatch = await _batchRepository.AddBatch(batch);
        return CreatedAtAction(nameof(GetBatch), new { id = newBatch.BatchId }, newBatch);
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> UpdateBatch(int id, Batch batch)
    {
        if (id != batch.BatchId) return BadRequest();
        await _batchRepository.UpdateBatch(batch);
        return NoContent();
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteBatch(int id)
    {
        var deleted = await _batchRepository.DeleteBatch(id);
        if (!deleted) return NotFound();
        return NoContent();
    }
}
